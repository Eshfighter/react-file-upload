import React, { Component } from 'react';
import { DropArea, DocumentTypeDetails, BrowseFileButton, UploadProgressBar, DeleteProgressBar } from './styled/UploadComponent';

class UploadComponent extends Component {
  state = {
    uploading: false,
    deleting: false,
    hovering: false,
    uploadProgress: 0,
    documents: [],
  }

  // Used to check for dragging within the component for file drop
  // Needed to prevent child components from deactivating the onDragEnter state
  dragCounter = 0;

  _onDragEnter = (e) => {
    this.preventDefaults(e);
    console.log(this);
    this.dragCounter++;
    this.setState({
      hovering: true
    })
  }

  _onDragLeave = (e) => {
    this.preventDefaults(e);
    // Update state when dragCounter is 0, which occurs only when mouse is
    // dragged out of the component
    if (--this.dragCounter === 0){
      this.setState({
        hovering: false
      })
    }
  }

  _onDrop = (e) => {
    this.preventDefaults(e);
    console.log('File dropped');
    const dataTransfer = e.dataTransfer;
    const file = dataTransfer.files[0];

    this._uploadFile(file)
    this.setState({
      hovering: false
    })
  }

  _onDragOver = (e) => {
    this.preventDefaults(e);
  }

  _uploadFile = (file) => {
    if (file) {
      this.setState({
        uploading: true
      });
      const documentRecord = this.createDocumentRecord();
      // Pass the callback functions to update the progressbar, reset
      // back to original state after uploading, and handling the uploaded file
      const { uploadFile } = this.props;
      uploadFile(file, documentRecord, this.progressBarUpdate, this.resetState, this.handleSuccessfulUpload);
    }
  }

  // Resets state for each request to hide and reset progressbars
  resetState = () => {
    this.setState({
      uploading: false,
      uploadProgress: 0,
      deleting: false
    })
  }

  // Call back function passed to post request to update progressbar's progress
  progressBarUpdate = (e) => {
    const uploadProgress = (e.loaded * 100.0 / e.total);
    this.setState({
      uploadProgress
    })
  }

  // Call back function passed to add file action to update internal state of
  // upload component with the new document record persisted in the server
  handleSuccessfulUpload = (document) => {
    const { documents } = this.state;
    this.setState({
      documents: [
        ...documents,
        document
      ]
    })
  }

  // onChange method passed to the BrowseFileButton to allow user to
  // trigger the uploading once he selects a file
  handleUploadedFile = (event) => {
    this._uploadFile(event.target.files[0]);
  }

  // Call a delete document server request through the action and
  // update the internal state to remove the documentRecord
  deleteFile = () => {
    this.setState({
      deleting: true
    });
    console.log('deleting file')
    const documentRecord = this.state.documents[0].documentRecord;
    const documentRecordObj = documentRecord;
    try {
      documentRecordObj['data']['attributes']['document-status'] = "DELETE";
    }
    catch(err) {
      console.log(err);
    };

    const { deleteUploadedFile } = this.props;
    deleteUploadedFile(documentRecordObj, this.resetState, this.handleSuccessfulDelete);
  }

  // Call back function passed to delete file action to update internal state
  // of the upload component with an emptied document array
  handleSuccessfulDelete = () => {
    this.setState({
      documents: []
    })
  }

  preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  createDocumentRecord = () => {
    const { classification } = this.props;
    const attributes = {
      'origin': 'frontline_supporting_documents',
      'document-status': 'COMPLETE',
      'image-order': '',
      classification
    };
    const id = Date.now() + '';
    const type = "document";
    const data = { type, id, attributes };
    return { data };
  }

  render() {
    const { elementId, classification } = this.props;
    const { hovering, uploadProgress, documents } = this.state;
    const documentUploaded = documents[0];
    return (
      <DropArea onDragEnter={this._onDragEnter}
                onDragOver={this._onDragOver}
                onDragLeave={this._onDragLeave}
                onDrop={this._onDrop}
                hoveringStyle={
                  {
                    borderColor: hovering ? '#0085d4' : 'gray',
                    backgroundColor: hovering ? 'lightgray' : 'white'
                  }}>
        <form>
          <DocumentTypeDetails classification={classification}
                               documentName={documentUploaded ? documentUploaded.fileName : ''} />
          <BrowseFileButton id={elementId}
                            onChange={this.handleUploadedFile}
                            documentUploaded={documentUploaded}
                            deleteFile={this.deleteFile}
                            />
          {this.state.uploading ? <UploadProgressBar  progress={uploadProgress} /> : ''}
          {this.state.deleting ? <DeleteProgressBar /> : ''}
        </form>
      </DropArea>
    )
  }
}

export default UploadComponent;

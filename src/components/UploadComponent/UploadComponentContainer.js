import UploadComponent from './UploadComponent';
import { connect } from 'react-redux';
import { addFile, deleteFile } from '../../actions';
import { withRouter } from 'react-router-dom';

// This method gets the state from the store, and passes it as props
const mapStateToProps = (state) => {
  return {
    // Add only if require any state as props
  }
}

const mapDispatchToProps = (dispatch) => ({
  uploadFile(file, documentRecord, progressBarUpdate, resetState, handleSuccessfulUpload) {
    if(file) {
      dispatch(
        addFile(file, documentRecord, progressBarUpdate, resetState, handleSuccessfulUpload)
      )
    }
  },
  deleteUploadedFile(documentRecord, resetState, handleSuccessfulDelete) {
    if (documentRecord) {
      dispatch (
        deleteFile(documentRecord, resetState, handleSuccessfulDelete)
      )
    }
  }
})

const UploadComponentContainer = connect(mapStateToProps, mapDispatchToProps)(UploadComponent);

export default withRouter(UploadComponentContainer);

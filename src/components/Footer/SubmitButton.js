import React, { Component } from 'react';
import { SubmitButtonComponent, SubmitButtonContents } from './styled/SubmitButton';

class SubmitButton extends Component{

  state = {
    fieldsValidated:false
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("submit button component is updated " + nextProps.uploadedFiles);
    let isAllCategoriesUploaded = SubmitButton.handleValidation(nextProps);
    return {
      fieldsValidated: isAllCategoriesUploaded,
    }
  }

  static handleValidation = (props) => {
    const {docCheckListMandatory} = props;
    const uploadedFileCategories = SubmitButton.uploadedFileCategories(props);
    const isAllMandatoryDocumentsUploaded = SubmitButton.validateCategory(docCheckListMandatory,uploadedFileCategories);
    return isAllMandatoryDocumentsUploaded;
  }

  static uploadedFileCategories = (props) => {
    const {uploadedFiles} = props;
    return uploadedFiles.map((uploadedFile)=>{
      let uploadedFileJson = uploadedFile.documentRecord;
      let uploadedFileCategory = uploadedFileJson.data.attributes.classification;
      return uploadedFileCategory;
    })
  }

  static validateCategory = (docCheckListMandatory, uploadedFileCategories) => {
    return docCheckListMandatory.every((category)=>{
      return uploadedFileCategories.includes(category);
    })
  }


  render(){
    return (
      <SubmitButtonComponent fieldsValidated={this.state.fieldsValidated}>
        <SubmitButtonContents fieldsValidated={this.state.fieldsValidated}/>
      </SubmitButtonComponent>
  );
  }
}

export default SubmitButton;

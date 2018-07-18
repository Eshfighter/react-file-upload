import { ImageUploadUrl, ImageDeleteUrl, ActionTypes } from './utils/constants';
import { uploadFileRequest, deleteFileRequest, fetchdocumentChecklist } from './utils/requests';

export const addFile = (file, documentRecord, progressBarUpdate, resetState, handleSuccessfulUpload) => dispatch => {
  dispatch(requestServer());
  // TODO: Modify post call here
  uploadFileRequest(ImageUploadUrl, file, documentRecord, progressBarUpdate)
    .then((response) => {
      console.log(response);
      dispatch({
        type: ActionTypes.ADD_FILE,
        payload: response
      });
      handleSuccessfulUpload(response);
    }).catch((err) => {
      console.log("Failed to upload file " + err.message);
      dispatch(addError("Failed to upload file: " + err.message));
    }).finally(() => {
      dispatch(finishServerRequest());
      setTimeout(() => {
        resetState();
      }, 500);
    })
}

export const deleteFile = (documentRecord, resetState, handleSuccessfulDelete) => dispatch => {
  dispatch(requestServer());
  const url = ImageDeleteUrl + documentRecord['data']['id'];
  console.log(url)
  deleteFileRequest(url, documentRecord)
    .then((response) => {
      console.log(response);
      dispatch({
          type: ActionTypes.DELETE_FILE,
          payload: documentRecord.data.id
      });
      console.log(handleSuccessfulDelete);
      handleSuccessfulDelete();
    }).catch((err) => {
      console.log("Failed to delete file :: " + err.message);
      dispatch(addError("Failed to delete file: " + err.message));
    }).finally(() => {
      dispatch(finishServerRequest());
      resetState();
    });
}

export const documentChecklistRequest = (url, redirectToUploadPage) => dispatch => {
  dispatch(requestServer());
  fetchdocumentChecklist(url).then((response)=>{
    console.log("repsonse for doc-checklist request" + response);
    dispatch({
      type: ActionTypes.FETCH_DOC_CHECKLIST,
      payload: response.data.attributes
    });
    redirectToUploadPage();
  }).catch((err) => {
    console.log("err for document checklist request : " + err.message);
    dispatch(addError("Error fetching document checklist: " + err.message));
  }).finally(() => {
    dispatch(finishServerRequest());
  });
}

export const validateLinkRequest = (url, userType, appId) => dispatch => {
}

export const addError = (message) =>
 ({
    type: ActionTypes.ADD_ERROR,
    payload: message
 })

export const clearError = index =>
  ({
      type: ActionTypes.CLEAR_ERROR,
      payload: index
  })

export const requestServer = () =>
  ({
    type: ActionTypes.SERVER_REQUEST
  })

export const finishServerRequest = () =>
  ({
    type: ActionTypes.FINISH_REQUEST
  })
import { ActionTypes } from '../utils/constants';
import { combineReducers } from 'redux';

export const uploadedFiles = (state=[], action) => {
  switch(action.type) {
    case ActionTypes.ADD_FILE :
    	return [
         ...state,
         action.payload
    	];
    case ActionTypes.DELETE_FILE :
      return state.filter((file) => 
      (file.documentRecord.data.id !== action.payload));
  	default:
  		return state;
  }
}

export const errors = (state=[], action) => {
  switch(action.type) {
    case ActionTypes.ADD_ERROR :
    	return [
         ...state,
         action.payload
    	]
    case ActionTypes.CLEAR_ERROR :
      return state.filter((message, i) => i !== action.payload)
  	default:
  		return state
  }
}

export const isRequestingServer = (state=false, action) => {
  switch(action.type) {
    case ActionTypes.SERVER_REQUEST:
      return true;
    case ActionTypes.FINISH_REQUEST:
      return false;
    default:
      return state;
  }
}

export const docCheckList = (state=[], action) => {
  if (action.type === ActionTypes.FETCH_DOC_CHECKLIST) {
    return action.payload;
  } else {
    return state;
  }
}

export default combineReducers({
  uploadedFiles,
  errors,
  isRequestingServer,
  docCheckList
})

import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {

	const result = next(action);
	const { uploadedFiles, errors, isRequestingServer } = store.getState();

  console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log(`

		Number of Uploaded Files: ${uploadedFiles.length}
		errors: ${errors.length}
		isRequestingServer: ${isRequestingServer}
	`);
	console.groupEnd();

	return result;
}

export default (initialState={}) => {
	return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState)
}

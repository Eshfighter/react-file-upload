import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import storeFactory from './store'
import routes from './routes';

const initialState = {
  isRequestingServer: false,
  uploadedFiles: [],
  errors: [],
  docCheckList: {
    mandatory: ['ID', 'Residence Proof', 'Other Supporting Documents'],
    optional: []
  }
}

const store = storeFactory(initialState);

window.React = React
window.store = store

ReactDOM.render(
  <Provider store={store}>
   {routes}
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBodyContainer } from './styled/App';
import DocumentUploadPage from '../DocumentUploadPage/DocumentUploadPage';
import AuthenticationPage from '../AuthenticationPage/AuthenticationPage';
import SessionTimeout from '../SessionTimeout/SessionTimeout';

const AppBody = () => (
  <AppBodyContainer>
    <Switch>
      <Route exact path='/' component={AuthenticationPage}/>
      <Route exact path='/upload' component={DocumentUploadPage}/>
      <Route exact path='/timeout' component={SessionTimeout}/>
    </Switch>
  </AppBodyContainer>
)

export default AppBody;

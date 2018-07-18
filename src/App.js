import React, { Component } from 'react';
import { AppContainer } from './components/App/styled/App';
import Header from './components/Header/Header';
import AppBody from './components/App/AppBody';
import ErrorLog from './components/ErrorLog/ErrorLogContainer';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <ErrorLog />
        <AppBody />
      </AppContainer>
    );
  }
}

export default App;

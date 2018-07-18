import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoginContainer, LoginForm, FormInput, FormLabel, FormSubmitButton, FormTitle } from './styled/LoginComponent';
import { FormGroup, FormControl, Col } from 'react-bootstrap';

class LoginComponent extends Component {

  state = {
    loginAppNum: 'A123456789',
    loginAppPassword: '1'
  }

  componentDidMount(){
    // let validatelinkUrl= environment.baseURL+environment.validatelink+this.serverService.appId;
  } 

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  getValidationState() {
    const appNumLength = this.state.loginAppNum.length;
    if (appNumLength === 10) {
      return 'success';
    }
    else if (appNumLength > 0) {
      return 'error';
    }
    return null;
  }

  handleChange = (e) => {
    const loginAppNum = e.target.value;
    this.setState({
      loginAppNum
    });
  }

  handlePasswordChange = (e) => {
    const loginAppPassword = e.target.value;
    this.setState({
      loginAppPassword,
    });
  }

  _onSubmit = (e) => {
    e.preventDefault();
    const { loginAppPassword, loginAppNum } = this.state;
    if (loginAppNum.length === 10 && loginAppPassword) {
      console.log('Attempting to log in');
      // TODO: Add login service call
      const { authenticateApplication, fetchDocumentCheckList } = this.props;
      authenticateApplication(loginAppNum, loginAppPassword).then((res) => {
        fetchDocumentCheckList(loginAppNum, this.redirectToUploadPage);
      })
    } else {
      console.log('Do nothing')
      // TODO: Replace with React Modals
      this.context.router.history.push("/upload");
      alert('Invalid input for login application number/password');
    }
  }

  redirectToUploadPage = () => {
    this.context.router.history.push("/upload");
  }

  render() {
    return (
      <LoginContainer>
        <LoginForm horizontal onSubmit={this._onSubmit}>
          <FormTitle>Application Form Login</FormTitle>
          <FormGroup ref={ref => this.loginAppNum = ref} controlId='loginUserInput' validationState={this.getValidationState()}>
            <Col sm={4} style={{ textAlign: 'right' }}>
              <FormLabel>Application Number</FormLabel>
            </Col>
            <Col sm={8}>
              <FormInput type="text" placeholder="Enter Application Number"
                         value={this.state.loginAppNum} onChange={this.handleChange} />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup controlId='loginPassInput'>
            <Col sm={4} style={{ textAlign: 'right' }}>
              <FormLabel>Password</FormLabel>
            </Col>
            <Col sm={8}>
              <FormInput type="password" placeholder="Enter Password"
                         value={this.state.loginAppPassword} onChange={this.handlePasswordChange} />
            </Col>
          </FormGroup>
          <FormSubmitButton disabled={this.state.disableSubmit} label='wassup' type='submit'>Login</FormSubmitButton>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default LoginComponent;

import React from 'react';
import { AuthenticationContainer } from './styled/AuthenticationPage'
import LoginComponent from '../LoginComponent/LoginComponentContainer'

const AuthenticationPage = () => {
  return (
    <AuthenticationContainer>
      <LoginComponent/>
    </AuthenticationContainer>
  )
}

export default AuthenticationPage;

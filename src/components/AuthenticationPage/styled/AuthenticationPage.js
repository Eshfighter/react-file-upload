import styled from 'styled-components';
import loginBackground from '../../../assets/login-background.jpg';

export const AuthenticationContainer = styled.div`
  background-size: cover;
  background-position: right bottom;
  background-image: linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)), url(${loginBackground});
  position: absolute;
  padding: 50px;
  height: 100%;
  width: 100%;
`

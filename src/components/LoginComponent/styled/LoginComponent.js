import styled from 'styled-components';
import { Form, ControlLabel, FormControl, Button } from 'react-bootstrap';

export const LoginContainer = styled.div`
  background-color: white;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  display: flex
`

export const LoginForm = styled(Form)`
  width: 60%;
  margin: auto;
`

export const FormLabel = styled(ControlLabel)`
  text-align: right;
`

export const FormInput = styled(FormControl)`

`

export const FormSubmitButton = styled(Button)`

`

export const FormTitle = styled.h1`
  margin-bottom: 50px;
  text-decoration: underline;
`

import React from 'react';
import styled from 'styled-components';

const SubmitButtonOuterWrapper = styled.div`
  background: linear-gradient(to right, #1e70bf 50%, #353738 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  background-color: #353738; 
  transition: all .4s ease-out;
  color: white;
  position: fixed;
  bottom:0;
  width: 100%;
  cursor: pointer;
  height: 60px;
  div:after{
    content: 'Submit';
  }
  &:hover{
    background-position: left bottom;
    transition: all .4s ease-out;
    
    div:after{
      content: 'Please upload all mandatory documents';
    }
  }
`
const SubmitButtonOuterWrapperValidated = styled.div`
  background-color: #63B464; 
  transition: all .2s ease-out;
  color: white;
  position: fixed;
  bottom:0;
  width: 100%;
  cursor: pointer;
  height: 60px;
  div:after{
    content: 'Submit';
  }
`

const SubmitButtonText = styled.div`
  font-size: 16px;
  position: relative;
  display: inline-block;
  line-height: 60px;
  font-family: "SC Sans Web", sans-serif;
`

export const SubmitButtonComponent = (props) => {

  if(props.fieldsValidated){
    return (
      <SubmitButtonOuterWrapperValidated>
      {props.children}
      </SubmitButtonOuterWrapperValidated>
    );
  }else{
    return(
      <SubmitButtonOuterWrapper>
      {props.children}
      </SubmitButtonOuterWrapper>
    );
  }
}

export const SubmitButtonContents = (props) => (
  <SubmitButtonText></SubmitButtonText>
)
import React from 'react';
import styled from 'styled-components';
import CloseButton from 'react-icons/lib/fa/close'

export const ErrorContainer = styled.div`
  width: 100%;
  font-size: 1.2em;
`

const ErrorMessage = styled.div`
  width: 100%;
  padding-left: 5px;
  z-index: 999;
  background-color: red;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AppError = ({ handleClose, children, index }) => {
  return (
    <ErrorMessage>
      {children}
      <CloseButton onClick={() => handleClose(index)} style={{ cursor: 'pointer' }} />
    </ErrorMessage>
  )
}

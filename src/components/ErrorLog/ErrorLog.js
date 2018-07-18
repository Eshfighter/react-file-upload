import React from 'react';
import { ErrorContainer, AppError } from './styled/ErrorLog';

const ErrorLog = ({errors, onClearError}) => {
  return (
    <ErrorContainer>
      {errors.map((err, i) =>
          <AppError key={i} index={i} handleClose={onClearError}>{err}</AppError>
      )}
    </ErrorContainer>
  )
}

export default ErrorLog;

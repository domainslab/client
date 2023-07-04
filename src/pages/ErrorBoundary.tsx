import useOnce from 'hooks/useOnce';
import { useState } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const ErrorBoundary: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const error = useRouteError();

  const extractErrorMessage = (): string => {
    if (isRouteErrorResponse(error)) {
      return error.error?.message || error.statusText;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      return 'Unknown error';
    }
  };

  useOnce(() => {
    setErrorMessage(extractErrorMessage());
  });

  return (
    <div>
      <h1>Oops!</h1>
      <p>Terribly sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};

export default ErrorBoundary;

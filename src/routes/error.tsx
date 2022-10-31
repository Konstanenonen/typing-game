import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  return (
    <div id="error-page">
      <h1>Oopsie!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default Error;

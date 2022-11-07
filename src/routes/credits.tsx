import React from 'react';

function Credits() {
  return (
    <div>
      <h1>Big thank you to Wikimedia REST API</h1>
      <p>
        Wikimedia REST API is used in this app to fetch random Wikipedia article
        summaries!
      </p>
      <a href="https://www.mediawiki.org/wiki/Wikimedia_REST_API">
        Link to api documentation
      </a>
      <p>
        Wikimedia REST API, and there for this project too, is licensed under
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">
          CC-BY-SA 3.0
        </a>
        and
        <a href="GFDL">GFDL</a>
        licenses.
      </p>
    </div>
  );
}

export default Credits;

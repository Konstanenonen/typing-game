import React from 'react';
import styles from './credits.module.scss';

function Credits() {
  return (
    <div className={styles.container}>
      <h1>
        Big thank you to Wikimedia{' '}
        <a href="https://www.mediawiki.org/wiki/Wikimedia_REST_API">REST API</a>
      </h1>

      <p>
        Wikimedia REST API is used in this app to fetch random Wikipedia article
        summaries!
      </p>
      <p>
        Wikimedia REST API, and therefore this project too, is licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">
          CC-BY-SA 3.0
        </a>{' '}
        and <a href="GFDL">GFDL</a> licenses.
      </p>
    </div>
  );
}

export default Credits;

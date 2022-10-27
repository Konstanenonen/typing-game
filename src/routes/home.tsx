import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <h1>Typing game</h1>
      <p>Welcome to the Typing game website!</p>
      <Link to="/game">Go to game</Link>
    </div>
  );
}

export default Home;

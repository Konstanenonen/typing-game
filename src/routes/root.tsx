import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './root.module.scss';

function Root() {
  return (
    <div className={styles.container}>
      <Navbar>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Link to="/Credits">Credits</Link>
      </Navbar>
      <div className={styles.stretch}>
        <Outlet />
      </div>
      <Navbar>
        <p>Made by Konsta Nenonen</p>
      </Navbar>
    </div>
  );
}

export default Root;

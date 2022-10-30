import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './root.module.scss';

function Root() {
  return (
    <div className={styles.container}>
      <Navbar>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/game">
          Game
        </NavLink>
        <NavLink className={styles.navLink} to="/Credits">
          Credits
        </NavLink>
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

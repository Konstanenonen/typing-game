import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from './root.module.scss';

function Root() {
  return (
    <div className={styles.container}>
      <Navbar>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/game"
        >
          Game
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.navLinkActive : styles.navLink
          }
          to="/credits"
        >
          Credits
        </NavLink>
      </Navbar>
      <div className={styles.stretch}>
        <Outlet />
      </div>
      <Footer>
        <p>Made by Konsta Nenonen</p>
      </Footer>
    </div>
  );
}

export default Root;

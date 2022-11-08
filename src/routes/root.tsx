import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-unresolved
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
        <div className={styles.iconArea}>
          <a
            href="https://github.com/Konstanenonen/typing-game"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://fi.linkedin.com/in/konsta-nenonen-596767203"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Footer>
    </div>
  );
}

export default Root;

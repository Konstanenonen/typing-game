import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import styles from './root.module.scss';

function Root() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.stretch}>
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}

export default Root;

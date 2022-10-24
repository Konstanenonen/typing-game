import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './root.module.scss';

function Root() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}

export default Root;

import React from 'react';
import styles from './Playground.module.scss';

interface PlaygroundProps {
  children: React.ReactNode;
}

function Playground({ children }: PlaygroundProps) {
  return <div className={styles.container}>{children}</div>;
}

export default Playground;

import React from 'react';
import styles from './Footer.module.scss';

interface FooterProps {
  children: React.ReactNode;
}

function Footer({ children }: FooterProps) {
  return <footer className={styles.container}>{children}</footer>;
}

export default Footer;

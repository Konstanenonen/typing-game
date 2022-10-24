import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  );
}

export default Button;

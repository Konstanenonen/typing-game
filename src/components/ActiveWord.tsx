import React from 'react';
import styles from './ActiveWord.module.scss';

interface ActiveWordProps {
  correctWord: string;
  inputWord: string;
}

function ActiveWord({ correctWord, inputWord }: ActiveWordProps) {
  const correctWordArray = correctWord.split('');
  const inputWordArray = inputWord.split('');

  const letterElements = correctWordArray.map((correctLetter, index) => {
    const inputLetter = inputWordArray[index];

    if (inputWordArray.length > correctWordArray.length) {
      return <span className={styles.wrong}>{correctLetter}</span>;
    }

    if (inputWordArray[index] === undefined) {
      return <span className={styles.undefined}>{correctLetter}</span>;
    }

    if (correctLetter === inputLetter) {
      return <span className={styles.correct}>{correctLetter}</span>;
    }

    return <span className={styles.wrong}>{correctLetter}</span>;
  });

  return <span>{letterElements}</span>;
}

export default ActiveWord;

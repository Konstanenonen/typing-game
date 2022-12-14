import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  typedWords: number;
  start: boolean;
  gameOver: boolean;
}

function Timer({ start, typedWords, gameOver }: TimerProps) {
  const [time, setTime] = useState(0);
  const [prevWordsPerMinute, setPrevWordsPerMinute] = useState(0);
  const [prevRoundTime, setPrevRoundTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [bestWordsPerMinute, setBestWordsPerMinute] = useState(0);
  let wordsPerMinute = Math.round((typedWords / time) * 60);
  if (wordsPerMinute === Infinity || Number.isNaN(wordsPerMinute)) {
    wordsPerMinute = 0;
  }

  useEffect(() => {
    const bestWPM = Number(localStorage.getItem('bestWPM'));
    const fastestTime = Number(localStorage.getItem('bestTime'));

    setBestWordsPerMinute(bestWPM);
    setBestTime(fastestTime);
  });

  useEffect(() => {
    const id = setInterval(() => {
      if (start) {
        setTime((t) => t + 1);
      } else {
        setTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [start]);

  useEffect(() => {
    if (gameOver) {
      setPrevWordsPerMinute(wordsPerMinute);
      setPrevRoundTime(time);

      if (wordsPerMinute > bestWordsPerMinute) {
        setBestWordsPerMinute(wordsPerMinute);
        localStorage.setItem('bestWPM', wordsPerMinute.toString());
      }

      if (time < bestTime || bestTime === 0) {
        setBestTime(time);
        if (time !== 0) {
          localStorage.setItem('bestTime', time.toString());
        }
      }
    }
  }, [gameOver]);

  return (
    <div className={styles.container}>
      <div className={styles.timerSection}>
        <div className={styles.pair}>
          <p>Current time</p>
          <p className={styles.bigFont}>{time} s</p>
        </div>
        <div className={styles.pair}>
          <p>Previous round time</p>
          <p className={styles.bigFont}>{prevRoundTime} s</p>
        </div>
        <div className={styles.pair}>
          <p>Best time</p>
          <p className={styles.bigFont}>{bestTime} s</p>
        </div>
      </div>
      <div className={styles.timerSection}>
        <div className={styles.pair}>
          <p>Current WPM</p>
          <p className={styles.bigFont}>{wordsPerMinute}</p>
        </div>
        <div className={styles.pair}>
          <p>Previous round WPM</p>
          <p className={styles.bigFont}>{prevWordsPerMinute}</p>
        </div>
        <div className={styles.pair}>
          <p>Best WPM</p>
          <p className={styles.bigFont}>{bestWordsPerMinute}</p>
        </div>
      </div>
      <p>WPM = Words Per Minute</p>
    </div>
  );
}

export default Timer;

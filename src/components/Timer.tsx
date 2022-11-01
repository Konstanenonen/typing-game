import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  typedWords: number;
  start: boolean;
}

function Timer({ start, typedWords }: TimerProps) {
  const [time, setTime] = useState(0);
  const [prevTime, setPrevTime] = useState(0);
  const [prevWordsPerMinute, setPrevWordsPerMinute] = useState(0);
  const wordsPerMinute = Math.round((typedWords / time) * 60);

  useEffect(() => {
    const id = setInterval(() => {
      if (start) {
        setTime((t) => t + 1);
      } else {
        setPrevTime(time);
        setPrevWordsPerMinute(wordsPerMinute);
        setTime(0);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [start]);

  return (
    <div className={styles.container}>
      <div>Current time: {time}s</div>
      <div>Current wpm: {wordsPerMinute}</div>
      <div>Previous round time: {prevTime}s</div>
      <div>Previous round wpm: {prevWordsPerMinute}</div>
    </div>
  );
}

export default Timer;

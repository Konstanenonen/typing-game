import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  typedWords: number;
  start: boolean;
}

function Timer({ start, typedWords }: TimerProps) {
  const [time, setTime] = useState(0);
  const wordsPerMinute = Math.round((typedWords / time) * 60);

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

  return (
    <div className={styles.container}>
      <div>Current time: {time}s</div>
      <div>Current wpm: {wordsPerMinute}</div>
    </div>
  );
}

export default Timer;

import React, { useEffect, useState } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  start: boolean;
}

function Timer({ start }: TimerProps) {
  const [time, setTime] = useState(0);
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
      <div>Time: {time}s</div>
    </div>
  );
}

export default Timer;

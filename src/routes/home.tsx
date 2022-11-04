import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveWord from '../components/ActiveWord';
import Button from '../components/Button';
import styles from './home.module.scss';

function Home() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    setInput('');
    setInput2('');
    setTimeout(() => {
      setInput('T');
    }, 300);
    setTimeout(() => {
      setInput('Ty');
    }, 700);
    setTimeout(() => {
      setInput('Typ');
    }, 1200);
    setTimeout(() => {
      setInput('Typo');
    }, 1700);
    setTimeout(() => {
      setInput('Typ');
    }, 2200);
    setTimeout(() => {
      setInput('Typi');
    }, 2700);
    setTimeout(() => {
      setInput('Typin');
    }, 3200);
    setTimeout(() => {
      setInput('Typing');
    }, 3700);

    setTimeout(() => {
      setInput2('g');
    }, 4200);
    setTimeout(() => {
      setInput2('ga');
    }, 4700);
    setTimeout(() => {
      setInput2('gam');
    }, 5200);
    setTimeout(() => {
      setInput2('game');
    }, 5700);
    setTimeout(() => {
      setAnimationCount((a) => a + 1);
    }, 7000);
  }, [animationCount]);

  return (
    <div className={styles.container}>
      <div className={styles.titleArea}>
        <div className={styles.title}>
          <ActiveWord correctWord="Typing" inputWord={input} />
          <ActiveWord correctWord="game" inputWord={input2} />
        </div>
        <p className={styles.textBox}>
          {input} {input2}
        </p>
      </div>
      <Button>
        <Link className={styles.link} to="/game">
          Go to game
        </Link>
      </Button>
      <p>Test your typing speed with random Wikipedia article summaries!</p>
    </div>
  );
}

export default Home;

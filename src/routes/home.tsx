import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveWord from '../components/ActiveWord';
import Button from '../components/Button';
import styles from './home.module.scss';

function Home() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setInput('T');
    }, 500);
    setTimeout(() => {
      setInput('Ty');
    }, 1000);
    setTimeout(() => {
      setInput('Typ');
    }, 1500);
    setTimeout(() => {
      setInput('Typo');
    }, 2000);
    setTimeout(() => {
      setInput('Typ');
    }, 2500);
    setTimeout(() => {
      setInput('Typi');
    }, 3000);
    setTimeout(() => {
      setInput('Typin');
    }, 3500);
    setTimeout(() => {
      setInput('Typing');
    }, 4000);

    setTimeout(() => {
      setInput2('g');
    }, 4500);
    setTimeout(() => {
      setInput2('ga');
    }, 5000);
    setTimeout(() => {
      setInput2('gam');
    }, 5500);
    setTimeout(() => {
      setInput2('game');
    }, 6000);
  }, []);

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

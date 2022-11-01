import React, { useEffect, useState } from 'react';
import ActiveWord from '../components/ActiveWord';
import WordArea from '../components/WordArea';
import styles from './game.module.scss';

function Game() {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [gameOver, setGameOver] = useState(true);
  const wordArray = text.split(' ');
  const inputArray = input.split(' ');

  const wordElements = wordArray.map((word, index) => {
    // Return default colored word if it hasn't come up yet
    if (inputArray[index] === undefined) {
      return <span>{word}</span>;
    }

    // Return a highlited word when it is the current word
    if (inputArray.length - 1 === index) {
      return <ActiveWord correctWord={word} inputWord={inputArray[index]} />;
    }

    // Return a green colored word if it was spelled correct
    if (word === inputArray[index]) {
      return <span className={styles.correct}>{word}</span>;
    }

    // The word wasn't any of the above so it was spelled incorrectly
    return <span className={styles.wrong}>{word}</span>;
  });

  // Sets a random Wikipedia article summary as the game text
  useEffect(() => {
    if (gameOver) {
      setInput('');
      setText('');
      fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
        .then((response) => response.json())
        .then((data) => {
          setText(data.extract);
          setGameOver(false);
        });
    }
  }, [gameOver]);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value);

    const inputArr = e.target.value.split(' ');

    if (inputArr.length > wordArray.length) setGameOver(true);
  }

  return (
    <div className={styles.container}>
      <WordArea loaded={!!text} wordElements={wordElements} />
      <label htmlFor="user-input">
        Write the above text here:
        <textarea
          name="user-input"
          id="user-input"
          className={styles.input}
          value={input}
          onChange={(e) => handleInput(e)}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          spellCheck="false"
        />
      </label>
    </div>
  );
}

export default Game;

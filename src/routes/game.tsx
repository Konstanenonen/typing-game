import React, { useState } from 'react';
import ActiveWord from '../components/ActiveWord';
import styles from './game.module.scss';

function Game() {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ullam alias corporis molestias sequi recusandae porro officiis dicta consectetur aperiam incidunt eos iusto voluptatem commodi, nostrum aliquam eaque est iure, accusamus culpa architecto debitis minus! Commodi, atque, magni ea obcaecati ad cum distinctio exercitationem magnam modi corrupti quis. Dolorum, illo ea, dolore distinctio labore doloremque accusamus officiis obcaecati, quo vel atque fugit beatae. Est sed beatae sunt eveniet commodi eligendi, tenetur doloremque neque blanditiis at cupiditate error repellat obcaecati assumenda maxime vel corrupti accusamus nam harum quos dolores fugiat! Quia odio totam nulla, aperiam natus sapiente temporibus facilis! Sequi, vero.'
  );
  const [input, setInput] = useState('');
  const wordArray = text.split(' ');
  const inputArray = input.split(' ');
  const wordElements = wordArray.map((word, index) => {
    // Return default colored word if it hasn't come up yet
    if (inputArray[index] === undefined) {
      return <span>{word}</span>;
    }

    // Return a highlited word when it is the current word
    if (inputArray.length - 1 === index) {
      // return <span className={styles.current}>{word}</span>;
      return <ActiveWord correctWord={word} inputWord={inputArray[index]} />;
    }

    // Return a green colored word if it was spelled correct
    if (word === inputArray[index]) {
      return <span className={styles.correct}>{word}</span>;
    }

    // The word wasn't any of the above so it was spelled incorrectly
    return <span className={styles.wrong}>{word}</span>;
  });

  return (
    <div className={styles.container}>
      <p className={styles.wordArea}>{wordElements}</p>
      <label htmlFor="user-input">
        Write the above text here:
        <textarea
          name="user-input"
          id="user-input"
          className={styles.input}
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          spellCheck="false"
        />
      </label>
    </div>
  );
}

export default Game;

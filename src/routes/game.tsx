import React, { useState } from 'react';
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
    if (inputArray.length - 1 === index) {
      return <span className={styles.current}>{word}</span>;
    }

    if (inputArray[index] === undefined) {
      return <span>{word}</span>;
    }

    if (word === inputArray[index]) {
      return <span className={styles.correct}>{word}</span>;
    }

    if (
      inputArray.length - 1 <= index &&
      word.length > inputArray[index].length
    ) {
      return <span>{word}</span>;
    }

    return <span className={styles.wrong}>{word}</span>;
  });

  return (
    <div className={styles.container}>
      <p className={styles.wordArea}>{wordElements}</p>
      <textarea
        className={styles.input}
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      >
        It was a dark and stormy night...
      </textarea>
    </div>
  );
}

export default Game;

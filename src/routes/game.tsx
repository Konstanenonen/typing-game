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
  const wordElements = wordArray.map((word, index) =>
    word === inputArray[index] ? (
      <span className={styles.correct}>{word}</span>
    ) : (
      <span>{word}</span>
    )
  );

  return (
    <div>
      <p className={styles.wordArea}>{wordElements}</p>
      <input
        type="text"
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Game;

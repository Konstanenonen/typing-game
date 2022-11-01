import React from 'react';
import styles from './WordArea.module.scss';

interface WordAreaProps {
  wordElements: React.ReactNode;
  loaded: boolean;
}

function WordArea({ wordElements, loaded }: WordAreaProps) {
  if (!loaded)
    return (
      <div className={styles.wordArea}>
        <div className={styles.skeletonText} />
        <div className={styles.skeletonText} />
        <div className={styles.skeletonText} />
        <div className={styles.skeletonText} />
      </div>
    );

  return <p className={styles.wordArea}>{wordElements}</p>;
}

export default WordArea;

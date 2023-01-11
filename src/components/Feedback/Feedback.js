import React from 'react';
import styles from './Feedback.module.css';

const FeedbackOption = ({ onClickButton }) => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.feedback__title}>Please leave feedback</h2>
      <ul className={styles.feedback__list}>
        <li className={styles.feedback__item}>
          <button
            className={styles.feedback__button}
            type="button"
            onClick={onClickButton}
          >
            good
          </button>
        </li>
        <li className={styles.feedback__item}>
          <button
            className={styles.feedback__button}
            type="button"
            onClick={onClickButton}
          >
            neutral
          </button>
        </li>
        <li className={styles.feedback__item}>
          <button
            className={styles.feedback__button}
            type="button"
            onClick={onClickButton}
          >
            bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeedbackOption;

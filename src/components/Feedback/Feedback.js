import React from 'react';

const FeedbackOption = ({ onClickButton }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button type="button" onClick={onClickButton}>
            good
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickButton}>
            neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickButton}>
            bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FeedbackOption;

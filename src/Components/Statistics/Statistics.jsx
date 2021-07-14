import React from 'react';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        {title}
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total(good, neutral, bad)}</li>
        <li>Positive feedback: {positivePercentage(good, neutral, bad)}</li>
      </ul>
    </>
  );
};

export default Statistics;

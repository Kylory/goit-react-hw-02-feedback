import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import Section from '../Section/Section';
import shortid from 'shortid';
import styles from './Statistics.module.css';

const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title={title}>
      {good || neutral || bad ? (
        <ul className={styles.statisticsList}>
          <li key={shortid.generate()}>Good: {good}</li>
          <li key={shortid.generate()}>Neutral: {neutral}</li>
          <li key={shortid.generate()}>Bad: {bad}</li>
          <li key={shortid.generate()}>Total: {total(good, neutral, bad)}</li>
          <li key={shortid.generate()}>
            Positive feedback: {positivePercentage(good, neutral, bad)}
          </li>
        </ul>
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

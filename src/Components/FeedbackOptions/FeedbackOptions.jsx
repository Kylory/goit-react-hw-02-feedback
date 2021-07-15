import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section/Section';
import shortid from 'shortid';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ title, options, onLeaveFeedback }) => {
  return (
    <Section title={title}>
      <ul className={styles.feedbackButtons}>
        {options.map(label => (
          <li className={styles.item} key={shortid.generate()}>
            <button
              name={label}
              type="button"
              onClick={() => onLeaveFeedback(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

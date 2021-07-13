import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};
  static propTypes = {};

  handleButtonGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleButtonNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleButtonBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      100 /
      ((this.state.good + this.state.neutral + this.state.bad) /
        this.state.good)
    );
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <div>
          <button name="good" type="button" onClick={this.handleButtonGood}>
            Good
          </button>
          <button
            name="neutral"
            type="button"
            onClick={this.handleButtonNeutral}
          >
            Neutral
          </button>
          <button name="bad" type="button" onClick={this.handleButtonBad}>
            Bad
          </button>
        </div>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage}%</p>
      </>
    );
  }
}

export default Feedback;

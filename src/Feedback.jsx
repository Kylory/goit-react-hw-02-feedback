import React, { Component } from "react";

class Feedback extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  static defaultProps = {};
  static propTypes = {};

  handleButton = (event) => {
    // console.log('clicked button', event.target.name);
    this.setState({good: 5,});
  }


  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <div>
          <button name="good" type="button" onClick={this.handleButton}>Good</button>
          <button name="neutral" type="button" onClick={this.handleButton}>Neutral</button>
          <button name="bad" type="button" onClick={this.handleButton}>Bad</button>
        </div>
        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    )
  }
}

export default Feedback;

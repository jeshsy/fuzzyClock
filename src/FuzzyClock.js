import React, { Component } from 'react';
import fuzzyScript from './fuzzyScript';

class FuzzyClock extends Component {
  constructor(props) {
    super();
    this.state = {
      fuzzyTime: "It's High Noon",
    }
    this.handleFuzzyTime = this.handleFuzzyTime.bind(this);
  }

  handleFuzzyTime() {
    this.setState({ fuzzyTime: fuzzyScript() });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ fuzzyTime: fuzzyScript() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
        <div className="FuzzyClock">
          {this.state.fuzzyTime} <br />
        </div>
    );
  }
}

export default FuzzyClock;
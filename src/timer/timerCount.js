import React, { Component } from "react";
class TimerCounter extends Component {
  render() {
    return <div className="timer">0:{this.props.sec}</div>;
  }
}
export default TimerCounter;

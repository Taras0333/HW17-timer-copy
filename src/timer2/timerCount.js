import React, { Component } from "react";
class TimerCounter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sec.toString().slice(-1) === "0") {
      return true;
    }
    return false;
  }
  render() {
    return <div className="timer">0:{this.props.sec}</div>;
  }
}
export default TimerCounter;

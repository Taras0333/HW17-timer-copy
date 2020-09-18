import React from "react";
import Create from "./render";

class Timer extends React.Component {
  state = {
    min: 0,
    sec: 59,
    status: false,
    status2: false,
    width: 177,
    color: "#9acd32",
  };

  componentDidMount() {
    this.timer = setInterval(this.changeTimer, 1000);
  }
  clear = () => {
    clearInterval(this.timer);
  };

  changeStyle = () => {
    if (this.state.sec <= 10) {
      return this.setState({
        width: this.state.width - 3,
        color: "#f44336",
      });
    } else {
      return this.setState({
        width: this.state.width - 3,
      });
    }
  };

  changeTimer = () => {
    this.changeStyle();
    this.setState((prevState) => {
      if (this.state.sec <= 0) {
        this.clear();
      } else if (this.state.sec <= 10) {
        return {
          sec: "0" + (prevState.sec - 1),
        };
      } else {
        return {
          sec: prevState.sec - 1,
        };
      }
    });
  };
  toggle = () => {
    this.setState((prevState) => {
      return { status: !prevState.status };
    });
    return this.state.status
      ? (this.timer = setInterval(this.changeTimer, 1000))
      : clearInterval(this.timer);
  };

  render() {
    return (
      <div className="wrap">
        <Create
          sec={this.state.sec}
          width={this.state.width}
          color={this.state.color}
        />
        <button className="btn" onClick={this.toggle}>
          {this.state.status ? "start" : "stop"}
        </button>
      </div>
    );
  }
}
export default Timer;

import React from "react";
import TimerFunc from "./timerCount";
const Timer = (props) => {
  return (
    <div className="cont">
      <TimerFunc sec={props.sec} />
      <div
        className="bar"
        style={{ width: props.width, backgroundColor: props.color }}
      ></div>
    </div>
  );
};
export default Timer;

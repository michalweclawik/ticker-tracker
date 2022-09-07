import React from "react";
import { useState } from "react";
import "./CounterTracker.scss";

const CounterTracker = () => {
  let [number, setNumber] = useState(0);

  const handleClick = (e) => {
    if (e.target.value === "+") {
      setNumber((number = number + 1));
      console.log(number);
    } else if (number === 0) {
      return;
    } else {
      setNumber((number = number - 1));
      console.log(number);
    }
  };

  return (
    <div className="counterTracker">
      <p>Complited ticket</p>
      <div className="counter">
        <button
          value="-"
          onClick={(e) => handleClick(e)}
          className="counterButtonMinus"
        >
          -
        </button>
        <div className="counterNumber">{number}</div>
        <button
          value="+"
          onClick={(e) => handleClick(e)}
          className="counterButtonPlus"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterTracker;

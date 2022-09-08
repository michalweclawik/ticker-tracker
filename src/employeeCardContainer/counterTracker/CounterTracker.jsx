import React from "react";
import { useState } from "react";
import "./CounterTracker.scss";

const CounterTracker = () => {
  const [number, setNumber] = useState(0);

  const handleClickDecrementation = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };
  const handleClickIncrementation = () => {
    setNumber(number + 1);
  };

  return (
    <div className="counterTracker">
      <p>Complited ticket</p>
      <div className="counter">
        <button
          onClick={handleClickDecrementation}
          className="counter__buttons"
        >
          -
        </button>
        <div className="counterNumber">{number}</div>
        <button
          onClick={handleClickIncrementation}
          className="counter__buttons"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterTracker;

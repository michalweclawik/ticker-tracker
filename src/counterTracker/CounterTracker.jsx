import React from 'react'
import "./CounterTracker.scss"

const CounterTracker = () => {
  return (
    <div className="counterTracker">
      <p>Complited ticket</p>
      <div className="counter">
        <button className="counterButtonMinus">-</button>
        <div className="counterNumber">15</div>
        <button className="counterButtonPlus">+</button>
      </div>
    </div>
  )
}

export default CounterTracker
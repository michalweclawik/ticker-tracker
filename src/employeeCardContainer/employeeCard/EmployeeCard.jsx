import "./EmployeeCard.scss";
import CounterTracker from "../counterTracker/CounterTracker";
import React from "react";

const EmployeeCard = (props) => {
  const { name, role } = props;

  return (
    <div className="employeeCard">
      <h2 className="employeeCard__name">
        <span>Name: </span> {name}
      </h2>
      <h3 className="employeeCard__role">
        <span>Role: </span>
        {role}
      </h3>
      <div className="employeeCard__Counter">
        <CounterTracker />
      </div>
    </div>
  );
};

export default EmployeeCard;
//  this is component it`s receiving props and presented it
// componentis responsible for presenting data

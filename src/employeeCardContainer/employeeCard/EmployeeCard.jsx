import "./EmployeeCard.scss";
import CounterTracker from "../counterTracker/CounterTracker";
import React from "react";

const EmployeeCard = ({ employeeArray }) => {
  return employeeArray.map(({ name, role }) => {
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
  });
};

export default EmployeeCard;

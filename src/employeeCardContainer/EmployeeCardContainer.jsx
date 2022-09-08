import EmployeeCard from "./employeeCard/EmployeeCard";
import "./EmployeeCardContainer.scss";
import React from "react";

const EmployeeCardContainer = ({ employeeArray }) => {
  const ticketCardJSX = employeeArray.map((employee) => {
    return <EmployeeCard name={employee.name} role={employee.role} />;
  });

  return <div className="EmployeeCardContainer">{ticketCardJSX}</div>;
};

export default EmployeeCardContainer;

//container is responsible for logic and sending props to the component

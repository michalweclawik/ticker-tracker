import EmployeeCard from "./employeeCard/EmployeeCard";
import "./EmployeeCardContainer.scss";
import React from "react";

const EmployeeCardContainer = ({ employeeArray }) => {
  const ticketCardJSX = employeeArray.map((employee) => {
    return (
      <div key={employee.id}>
        <EmployeeCard name={employee.name} role={employee.role} />
      </div>
    );
  });

  return <div className="EmployeeCardContainer">{ticketCardJSX}</div>;
};

export default EmployeeCardContainer;

//container is responsible for logic and sending props to the component

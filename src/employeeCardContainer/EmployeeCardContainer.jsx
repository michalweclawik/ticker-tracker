import EmployeeCard from "./employeeCard/EmployeeCard";
import "./EmployeeCardContainer.scss";
import React from "react";

const EmployeeCardContainer = ({ employeeArray, handleDelete }) => {
  const ticketCardJSX = employeeArray.map((employee) => {
    return (
      <div key={employee.id} className="Employee__div">
        <EmployeeCard name={employee.name} role={employee.role} />
        <button
          className="Employee__div__button"
          onClick={() => handleDelete(employee.id)}
        >
          DELETE CARD
        </button>
      </div>
    );
  });

  return <div className="EmployeeCardContainer">{ticketCardJSX}</div>;
};

export default EmployeeCardContainer;

//container is responsible for logic and sending props to the component

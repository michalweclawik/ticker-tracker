import EmployeeCard from "./employeeCard/EmployeeCard";
import "./EmployeeCardContainer.scss";
import React from "react";

const EmployeeCardContainer = ({ employeeArray }) => {
  return (
    <div className="EmployeeCardContainer">
      <EmployeeCard employeeArray={employeeArray} />
    </div>
  );
};

export default EmployeeCardContainer;

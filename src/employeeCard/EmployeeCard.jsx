import CounterTracker from '../counterTracker/CounterTracker';
import './EmployeeCard.scss'
import React from 'react'

const EmployeeCard = (props) => {
  const emloyeeArray=props.employeeArray

  const employeeCards = emloyeeArray.map(employee => (
    
    <div className="employeeCard" key ={employee.id}>
      <div className="employeeName">Name: {employee.name}</div>
      <div className="employeeRole">Role: {employee.role}</div>
      <CounterTracker/>
    </div>))
    
  return (
    <div className="employeeCardContainer">
   {employeeCards}
    
    </div>
  )
}

export default EmployeeCard
import CounterTracker from '../counterTracker/CounterTracker';
import './EmployeeCard.scss'
import React from 'react'

const EmployeeCard = () => {

    
  return (
    <div className="employeeCard">
     <div className="employeeCard__header">EmployeeCard</div>
     <CounterTracker/>
    </div>
  )
}

export default EmployeeCard
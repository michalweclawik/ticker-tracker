import './App.scss';
import team from './data/team'
import EmployeeCard from './employeeCard/EmployeeCard'

function App() {
  return (
     <div className = "app" >
        <header className = "app__header"> Ticket Tracker</header> 
        <div className="app__mainBody">
          <EmployeeCard employeeArray={team}/>
        </div>
    </div>
  );
}

export default App;
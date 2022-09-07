import "./App.scss";
import team from "./data/team";
import EmployeeCardContainer from "./employeeCardContainer/EmployeeCardContainer";

function App() {
  return (
    <div className="app">
      <header className="app__header"> Ticket Tracker</header>
      <EmployeeCardContainer employeeArray={team} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.scss";
import team from "./data/team";
import EmployeeCardContainer from "./employeeCardContainer/EmployeeCardContainer";

function App() {
  const [teams, setTeams] = useState(team);

  const handleDelete = (id) => {
    const newTeam = teams.filter((team) => team.id !== id);
    setTeams(newTeam);
  };

  return (
    <div className="app">
      <header className="app__header"> Ticket Tracker</header>
      <EmployeeCardContainer
        employeeArray={teams}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

// Importing components
import TeamForm from './components/TeamForm';
import Team from './components/Team';

// Import Starter Data
import data from './data'


function App() {
	
	const [teamMembers, setTeamMembers] = useState(data)

	const addNewMemeber = member => {
		setTeamMembers([...teamMembers, member])
	}

  return (
    <div className="App">
			<TeamForm addNewMemeber={addNewMemeber}/>
			<Team />
    </div>
  );
}

export default App;

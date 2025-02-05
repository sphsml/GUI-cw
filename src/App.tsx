import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import LoggedInPage from './loggedInPage';
import GlobalLead from './global-lead';
import RegionalLead from './regional-lead';
import RegionalLeadProjectPage from './regional-lead-project-page';
import RegionalLeadWFHRequestsPage from './regional-lead-wfh-requests';
import TeamMember from './team-member';
import TeamAvailability from "./team-availability";
import LogWorkStatus from "./log-work-status";

function App() {
  //state change being acknowledged for successful login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  //login function
  const handleLogin = (username: string, password: string) => {
    const isValidUser = validUsers.some(user => user.username === username && user.password === password);
    if (isValidUser) {
      console.log("Logged in as:", username);
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      console.log("Invalid username or password");
    }
  };

  //hard-coded login data
  const validUsers = [
    { username: 'globalLead', password: 'globalLead' },
    { username: 'teamMember', password: 'teamMember' },
    { username: 'regionalLead', password: 'regionalLead' }
  ];

  //Routing for all views in the program
  return (
    <div className="App">
      <header className="App-header">
        <p>COVID Registration System</p>
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <LoggedInPage username={username} /> : <Login onLogin={handleLogin} />} />
            <Route path="/global-lead" element={<GlobalLead />} />
            <Route path="/regional-lead" element={<RegionalLead/>} />
            <Route path="/team-member" element={<TeamMember />} />
            <Route path="/regional-lead-project-page.tsx" element={<RegionalLeadProjectPage />}></Route>
            <Route path="/regional-lead-wfh-requests.tsx" element={<RegionalLeadWFHRequestsPage />}></Route>
            <Route path="/team-availability.tsx" element={<TeamAvailability />}></Route>
            <Route path="/log-work-status.tsx" element={<LogWorkStatus />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
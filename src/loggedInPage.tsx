import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalLead from './global-lead';
import RegionalLead from './regional-lead';
import TeamMember from './team-member';
import {Button} from "react-native";

interface LoggedInPageProps {
  username: string;
}

function LoggedInPage({ username }: LoggedInPageProps) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <Routes>
        {username === 'globalLead' && <Route path="/" element={<GlobalLead/>} />}
        {username === 'regionalLead' && <Route path="/" element={<RegionalLead/>} />}
        {username === 'teamMember' && <Route path="/" element={<TeamMember />} />}
        <Route path="*" element={<Route path="/" />} />
      </Routes>
    </div>
  );
}

function loggedOut(){
    window.sessionStorage.clear();
    window.location.reload();
}
export function logOut(){
    return(
        <div>
            <button style={{ backgroundColor: "#A9A9A9"}} onClick={loggedOut}>Log Out</button>
        </div>
    )
}

export default LoggedInPage;
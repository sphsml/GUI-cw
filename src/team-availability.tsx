import React, { useState, ChangeEvent } from 'react';

// Inline SVG for Male Employee
const Employee1 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="35" r="20" fill="#D2B48C" />
      <rect x="40" y="55" width="20" height="35" fill="#00FF00" />
      <rect x="35" y="90" width="30" height="10" fill="#00FF00" />
      <circle cx="45" cy="30" r="3" fill="#FFFFFF" />
      <circle cx="55" cy="30" r="3" fill="#FFFFFF" />
      <path d="M45 42 Q 50 45, 55 42" stroke="#FFFFFF" strokeWidth="2" fill="none" />
      <rect x="42" y="15" width="20" height="6" fill="#8B4513" />
      <rect x="38" y="17" width="20" height="6" fill="#8B4513" />
      <rect x="45" y="18" width="20" height="6" fill="#8B4513" />
    </svg>
  );
  
  // Inline SVG for Female Employee
  const Employee2 = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="35" r="20" fill="#455A64" />
      <rect x="40" y="55" width="20" height="35" fill="#FF4081" />
      <rect x="35" y="90" width="30" height="10" fill="#FF4081" />
      <circle cx="45" cy="30" r="3" fill="#FFFFFF" />
      <circle cx="55" cy="30" r="3" fill="#FFFFFF" />
      <path d="M45 42 Q 50 45, 55 42" stroke="#FFFFFF" strokeWidth="2" fill="none" />
  
      <circle cx="36" cy="15" r="13" fill="#8B4513" />
      <rect x="40" y="16" width="20" height="6" fill="#8B4513" />
    </svg>
  );
  
  const TeamAvailability = () => {
    const [status, setStatus] = useState('See Team Availability');
  
    const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.target.value);
    };
  
    return (
      <div>
        <div className="team-availability">
          <Employee1/>
          <h3>Martin Smith</h3>
          <p>Status: WFH</p> 
        </div>
        <div className="team-availability">
          <Employee2/>
          <h3>Alesha Sandy</h3>
          <p>Status: Off Sick</p>
        </div>
        <div>
          <label htmlFor="logStatus">Log Work Status</label>
        </div>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    );
  };
  
  export default TeamAvailability;
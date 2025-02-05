import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {logOut} from "./loggedInPage";
import {Link} from "react-router-dom";
import profilePic from "./profile-pic.jpg";

const TeamMember: React.FC = () => {
    // State to keep track of selected radio button
    const [selectedOption, setSelectedOption] = useState<string>('');

    // Handler for radio button selection
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    };

    return (
    <div className="employee-calendar-container">
        <img src={profilePic} style={{ borderRadius: '50%' }} alt="Profile Picture" width="50" height="50"/>
        {/* Left side: Large Calendar */}
        <div className="calendar-container">
        <h2>Log WFH Status</h2>
        <Calendar />
        </div>

        {/* Right side: Radio buttons */}
        <div>
        <h2>Options</h2>
        </div>
        <div>
            <button style={{ backgroundColor: "#C8A2C8"}}><Link to="/log-work-status.tsx">Log Work Status</Link></button>
            <button style={{ backgroundColor: "#C8A2C8"}}><Link to="/team-availability.tsx">See Team Availability</Link></button>
        </div>
        <div>{logOut()}</div>
    </div>
    );
};

export default TeamMember;




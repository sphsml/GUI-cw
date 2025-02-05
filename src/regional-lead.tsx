import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logOut } from "./loggedInPage";
import { Link } from "react-router-dom";
import profilePic from "./profile-pic.jpg";

export const DashboardHeader = (
  <header className="header">
    <div className="header-content d-flex justify-content-between align-items-center">
      <h1 className="title">Dashboard</h1>
    </div>
  </header>
);

function RegionalLead() {
  const [projectList, setProjectList] = useState([
    { name: 'Project A', attendance: '7/10' },
    { name: 'Project B', attendance: '3/5' },
    { name: 'Project C', attendance: '7/9' },
    { name: 'Project D', attendance: '3/7' },
  ]);

  const addProject = () => {
    setProjectList([...projectList, { name: 'New Project', attendance: '0/0' }]);
  };

  const handleRowClick = (projectName: string) => {
    // Need to naviagte to a different project page 
    console.log(`Clicked on project: ${projectName}`);
  };

  const ProjectsTableSection = (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Projects</h2>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th>Project Name</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {projectList.map((project) => (
                <tr
                  key={project.name}
                  onClick={() => handleRowClick(project.name)}
                  className="table-row"
                >
                  <td>{project.name}</td>
                  <td>{project.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={addProject}>Add Project</button>
        </div>
      </div>
    </div>
  );

  const InOfficePieChartSection = (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">EMEA In-Office Overview</h2>
          <select className="form-select">
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
          <button className="btn btn-primary">Export PDF</button>
          <Chart
            chartType="PieChart"
            data={[
              ['Project', 'In-Office Attendance'],
              ['Project A', 7 / 10],
              ['Project B', 3 / 5],
              ['Project C', 7 / 9],
              ['Project D', 3 / 7],
            ]}
            options={{ title: 'In-Office Attendance Breakdown', is3D: true }}
            width={'100%'}
            height={'400px'}
          />
        </div>
      </div>
    </div>
  );

  const GovernmentAndWorkRegulationsSection = (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Government & Work Regulations</h2>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Government Regulations</h5>
                  <p>If someone tests positive for COVID-19 they must isolate for 2 Weeks</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Work Regulations</h5>
                  <p>In-Office attendance is currently required to be:</p>
                  <select className="form-select mt-3">
                    <option value="1 day">1 Day</option>
                    <option value="2 days">2 Days</option>
                    <option value="3 days">3 Days</option>
                    <option value="4 days">4 Days</option>
                    <option value="5 days">5 Days</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // @ts-ignore
  return (
    <div className="container">
      <div>
        {DashboardHeader}
        <img src={profilePic} style={{ borderRadius: '50%' }} alt="Profile Picture" width="50" height="50" />
      </div>
      <div className="row">
        {ProjectsTableSection}
        {InOfficePieChartSection}
      </div>
      <div className="row">
        {GovernmentAndWorkRegulationsSection}
      </div>
      <div>
        <button style={{ backgroundColor: "#C8A2C8" }}><Link to="/log-work-status.tsx">Log Work Status</Link></button>
        <button style={{ backgroundColor: "#C8A2C8" }}><Link to="/team-availability.tsx">See Team Availability</Link></button>
        <br /><button style={{ backgroundColor: "#C8A2C8" }}><Link to="/regional-lead-project-page.tsx">Project page</Link></button>
        <button style={{ backgroundColor: "#C8A2C8" }}><Link to="/regional-lead-wfh-requests.tsx">View WFH Request</Link></button>
      </div>
      <div>{logOut()}</div>
    </div>
  );
}

export default RegionalLead;

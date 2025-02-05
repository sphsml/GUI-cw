import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function RegionalLeadProjectPage() {
  const [wfhRequests, setWfhRequest] = useState([
    { name: 'Employee X', requestStatus: 'Approve WFH' },
    { name: 'Employee Y', requestStatus: 'Approve WFH' },
    { name: 'Employee Z', requestStatus: 'Approve WFH' },
  ]);

  const handleRequestStatusChange = (index: number, selectedStatus: string) => {
    const updatedRequests = [...wfhRequests];
    updatedRequests[index].requestStatus = selectedStatus;
    setWfhRequest(updatedRequests);
  };

  const handleWfhRequestsHeaderClick = () => {
    // Clicking on this will navigate to the new page for all the wfh requests
    console.log("Clicked on WFH Requests header");
  };

  const DashboardHeader = (
    <header className="header">
      <div className="header-content d-flex justify-content-between align-items-center">
        <h1 className="title">Project D</h1>
        <img src="profile-picture.jpg" alt="Profile Picture" width="50" height="50" />
      </div>
    </header>
  );

  const wfhRequestsHeader = (
    <thead className="thead-light">
      <tr onClick={handleWfhRequestsHeaderClick}>
        <th>Employee Name</th>
        <th>Request Status</th>
      </tr>
    </thead>
  );

  const wfhRequestsSection = (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">WFH Requests</h2>
          <table className="table table-hover">
            {wfhRequestsHeader}
            <tbody>
              {wfhRequests.map((employee, index) => (
                <tr key={employee.name}>
                  <td>{employee.name}</td>
                  <td>
                    <select
                      value={employee.requestStatus}
                      onChange={(e) => handleRequestStatusChange(index, e.target.value)}
                      className="form-select"
                    >
                      <option value="Approve WFH">Approve WFH</option>
                      <option value="Reject WFH">Reject WFH</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );


  const InOfficePieChartSection = (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Project D In-Office Overview</h2>
          <select className="form-select">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="daily">Daily</option>
          </select>
          <button className="btn btn-primary">Export PDF</button>
          <Chart
            chartType="PieChart"
            data={[
              ['Category', 'Value'],
              ['WFH', 53],
              ['In-Office', 35],
              ['Covid Leave', 12],
            ]}
            options={{ is3D: true }}
            width={'100%'}
            height={'400px'}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      {DashboardHeader}
      <div className="row">
        {wfhRequestsSection}
        {InOfficePieChartSection}
        </div>
    </div>
  );
}

export default RegionalLeadProjectPage;
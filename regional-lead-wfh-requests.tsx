import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// pictures need to be added through here, in the dashboard header again and for the uploaded evidences

interface WFHRequest {
  name: string;
  requestStatus: string;
}

function RegionalLeadWFHRequestsPage() {
  const [wfhRequests, setWfhRequests] = useState<WFHRequest[]>([
    { name: 'Employee X', requestStatus: 'Approve WFH' },
    { name: 'Employee Y', requestStatus: 'Approve WFH' },
    { name: 'Employee A', requestStatus: 'Approve WFH' },
    { name: 'Employee Z', requestStatus: 'Covid Leave' },
  ]);
  const [selectedEmployee, setSelectedEmployee] = useState<WFHRequest | null>(null);

  const DashboardHeader = (
    <header className="header">
      <div className="header-content d-flex justify-content-between align-items-center">
        <h1 className="title">WFH Requests</h1>
        <img src="profile-picture.jpg" alt="Profile Picture" width="50" height="50" />
      </div>
    </header>
  );

  // data for the Employee Z 
  const selectedRequest = {
    name: 'Employee Z',
    requestStatus: 'Covid Leave',
    description: 'I tested positive on 24/10/2023 as seen in the uploaded evidence, so as per government regulations I am requesting Covid leave for 2 weeks, ending 07/11/2023',
    startDate: '24-10-2023',
    endDate: '07-11-2023',
    // A photo needs to be uploaded 
    photo: '',
  };

  const handleRequestStatusChange = (index: number, selectedStatus: string) => {
    const updatedRequests = [...wfhRequests];
    updatedRequests[index].requestStatus = selectedStatus;
    setWfhRequests(updatedRequests);
  };

  const orderingOptions = [
    { label: 'Recent', value: 'recent' },
    { label: 'Oldest', value: 'oldest' },
  ];

  // this may need sorting out
  const OrderingDropdown = (
    <select className="form-select">
      {orderingOptions.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );

  const wfhRequestsHeader = (
    <thead className="thead-light">
      <tr>
        <th>Employee Name</th>
        <th>Request Status</th>
      </tr>
    </thead>
  );

  const wfhRequestsBody = (
    <tbody>
      {wfhRequests.map((employee, index) => (
        <tr key={employee.name} onClick={() => handleRowClick(employee)}>
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
              <option value="Covid Leave">Covid Leave</option>
            </select>
          </td>
        </tr>
      ))}
    </tbody>
  );

  const WFHRequestsTable = (
    <table className="table table-hover">
      {wfhRequestsHeader}
      {wfhRequestsBody}
    </table>
  );

  const SidePanel = selectedEmployee ? (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <p><strong>Name:</strong> {selectedEmployee.name}</p>
          <p><strong>Request Status:</strong> {selectedEmployee.requestStatus}</p>
          <p><strong>Description:</strong> {selectedRequest.description}</p>
          <p><strong>Start Date:</strong> {selectedRequest.startDate}</p>
          <p><strong>End Date:</strong> {selectedRequest.endDate}</p>
          <p><strong>Uploaded Evidence:</strong></p>
          <img src={selectedRequest.photo} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  ) : null;

  const handleRowClick = (employee: WFHRequest) => {
    // This is only for employee z, other data needs to be added for the other employees
    if (employee.name === 'Employee Z') {
      setSelectedEmployee(employee);
    } else {
      setSelectedEmployee(null); 
    }
  };

  return (
    <div className="container">
      <div className="row mb-3">
      {DashboardHeader}
        <div className="col-md-3">
            {OrderingDropdown}
        </div>
      </div>
      <div className="row">
        <div className="col-md-9">
          {WFHRequestsTable}
        </div>
        {SidePanel}
      </div>
    </div>
  );
}
export default RegionalLeadWFHRequestsPage;
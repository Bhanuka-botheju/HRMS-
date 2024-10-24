import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import LeaveRequestForm from 'views/LeaveRequestForm';


const leaveRequestDetails = [
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Bhanuka' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Umesha' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Niduni' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Isurumuni' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Dewmina' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Jayakodi' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'Wijekon' },
  { request_id: '111', employee_id : '001A', request_date: '12/12/2021', leave_start_date: '13/12/2012', period_of_absence: '2', reason: 'Sick Leave', type_of_leave: 'Annual', Name: 'botheju' },
];

const acceptLeaveRequest = () => {
  console.log("Accepted");
}

const rejecttLeaveRequest = () => {
  console.log("Rejected");
}

const LeaveApplications = (name) => {

  const navigate = useNavigate();
  const viewLeaveRequest = () => {
    console.log("Viewed");
    navigate('/leave-request-form',{state:{name}});
  }

  return (
    <React.Fragment>
      <Row >  
      <Card className="Recent-Users widget-focus-lg">
        <Card.Header>
          <Card.Title as="h5">Leave Applications</Card.Title>
        </Card.Header>

        {/* Need to update using the data from the database */}
        <Card.Body className="px-0 py-2">
          <Table responsive hover className="recent-users">
            <tbody>
            <tr className="unread">
              <th>
                <h6 className="mb-1">Request ID</h6>
              </th>
              <th>
                <h6 className="mb-1">ID</h6>
              </th>
              {/* <th>
                <h6 className="mb-1">Request Date</h6>
              </th> */}
              <th>
                <h6 className="mb-1">Leave Start Date</h6>
              </th>
              {/* <th>
                <h6 className="mb-1">Period of Absence</h6>
              </th>
              <th>
                <h6 className="mb-1">Reason</h6>
              </th>
              <th>
                <h6 className="mb-1">Type of Leave</h6>
              </th> */}
              <th>
                <h6 className="mb-1">Name</h6>
              </th>
              <th>
              </th>
            </tr>

            {leaveRequestDetails.map((data, index) => {
                
              const { request_id, employee_id, request_date, leave_start_date, period_of_absence, reason, type_of_leave, Name } = data;
                return(
                  <tr className="unread">
                    <td>
                    <h6 className="mb-1">{request_id}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1">{employee_id}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1">{leave_start_date}</h6>
                  </td>
                  <td>
                    <h6 className="mb-1">{Name}</h6>
                  </td>
                  <td>
                    <Button variant="primary" size="sm" style={{marginLeft: '50px', background: '#47b9ff'}} onClick={()=>viewLeaveRequest(Name)}>View</Button>
                  </td>
                  </tr>
                )
              }
                
            )}

            </tbody>
          </Table>
        </Card.Body>
        
      </Card>
        
      </Row>
    </React.Fragment>
  );
};

export default LeaveApplications;

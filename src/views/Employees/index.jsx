import React, { useState,useEffect } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button, CardBody } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import Profile from 'views/Profile';

//

let adminlist = [{emplyeeid:"user",firstname:"user",lastname:"user"}]

const dashSalesData = [
  { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
  { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
  { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
];

//Array of employee details
const employeeDetails = [
  { employee_id: '001A', name: 'Niduni', avatar: avatar1 },
  { employee_id: '002A', name: 'Isurumuni', avatar: avatar2 },
  { employee_id: '003A', name: 'Bhanuka', avatar: avatar2 },
  { employee_id: '004A', name: 'Umesha', avatar: avatar2 },
  { employee_id: '005A', name: 'Dewmina', avatar: avatar2 },
];

const Employees = () => {
  
  useEffect(() => {
    getdetailslistsfromback();
  }, []);

  const getdetailslistsfromback = async () => {
    getadminlist();
  }

  const getadminlist = async () => {
    try {
      // Fetch data from the backend
      const response = await fetch('http://localhost:8000/admin/employees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        adminlist = data;
        console.log("sucsees");
      } else {
        console.error('Failed');
      }
    } catch (error) {
      console.log('Error occurred:', error);
    }
  }
  const navigate = useNavigate();

  const addEmployee = () => {
    console.log("Add employee");
    navigate('/Admin/employees/add-employee');
  }
  // Function to view employee details
  const viewEmployee = (employee_id) => {
    console.log("Viewed employee");
    navigate('/Admin/employees/profile',{state:{employee_id}});
  };

  return (
    <React.Fragment>
      <Row >
        <Row>
          <Col key={0} xl={13}>
            <Card className="Recent-Users widget-focus-lg">
              <CardBody>
              <tbody>
                    <tr>
                      <td>
                      <Button variant="primary" size="sm" style={{marginLeft: '450px'}} onClick={() => addEmployee()}>Add Employees</Button>
                      </td>
                    </tr>
                  </tbody>
              </CardBody>
            </Card>
            <Card className="Recent-Users widget-focus-lg">
              <Card.Header>
                <Card.Title as="h5">Admin</Card.Title>
              </Card.Header>

              {/* Need to update using the data from the database */}
              <Card.Body className="px-0 py-2">
                <Table responsive hover className="recent-users">
                  <tbody>
                    {adminlist.map((data, index) => {
                      
                      const { employee_id, name, avatar } = data;
                      return(
                        <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1" style={{marginLeft: '200px'}}>{employee_id}</h6>
                        </td>
                        <td>
                          <h6 className="mb-1">{name}</h6>
                        </td>
                        <td>
                          <Button variant="primary" size="sm" style={{marginLeft: '50px'}} onClick={() => viewEmployee(data.employee_id)}>View</Button>
                        </td>
                        </tr>
                      )
                    }
                      
                  )}

                  </tbody>
                  
                </Table>
              </Card.Body>
              
            </Card>
            <Card className="Recent-Users widget-focus-lg">
              <Card.Header>
                <Card.Title as="h5">Supervision Under HR</Card.Title>
              </Card.Header>

              {/* Need to update using the data from the database */}
              <Card.Body className="px-0 py-2">
                <Table responsive hover className="recent-users">
                  <tbody>
                    {employeeDetails.map((data, index) => {
                      
                      const { employee_id, name, avatar } = data;
                      return(
                        <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1" style={{marginLeft: '200px'}}>{employee_id}</h6>
                        </td>
                        <td>
                          <h6 className="mb-1">{name}</h6>
                        </td>
                        <td>
                          <Button variant="primary" size="sm" style={{marginLeft: '50px'}} onClick={() => viewEmployee(data.employee_id)}>View</Button>
                        </td>
                        </tr>
                      )
                    }
                      
                  )}

                  </tbody>
                  
                </Table>
              </Card.Body>
              
            </Card>
            <Card className="Recent-Users widget-focus-lg">
              <Card.Header>
                <Card.Title as="h5">Employees Under HR</Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                <Table responsive hover className="recent-users">
                  <tbody>
                    {employeeDetails.map((data, index) => {
                      
                      const { employee_id, name, avatar } = data;
                      return(
                        <tr className="unread">
                        <td>
                          <img className="rounded-circle" style={{ width: '40px' }} src={avatar} alt="activity-user" />
                        </td>
                        <td>
                          <h6 className="mb-1" style={{marginLeft: '200px'}}>{employee_id}</h6>
                        </td>
                        <td>
                          <h6 className="mb-1">{name}</h6>
                        </td>
                        <td>
                          <Button variant="primary" size="sm" style={{marginLeft: '50px'}} onClick={() => viewEmployee(data.employee_id)}>View</Button>
                        </td>
                        </tr>
                      )
                    }
                      
                  )}

                  </tbody>
                  
                </Table>
              </Card.Body>
            </Card>
          </Col>

          
        </Row>
        
      </Row>
    </React.Fragment>
  );
};

export default Employees;

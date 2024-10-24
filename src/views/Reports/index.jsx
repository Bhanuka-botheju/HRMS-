import React, { useState } from 'react';
import { Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import PieChart from '../PieChart';

function Reports() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const dashSalesData = [
    { title: 'On Leave', icon: 'icon-arrow-up text-c-green', value: 13, class: 'progress-c-theme' },
    { title: 'Working Format : Full Time', icon: 'icon-arrow-down text-c-red', value: 85, class: 'progress-c-theme2' },
    { title: 'Working Format : Part Time', icon: 'icon-arrow-up text-c-green', value: 15, color: 'progress-c-theme' }
  ];

  const [selectedItem, setSelectedItem] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);

    if (eventKey === 'Employees by Department') {
      console.log('Fetch Employees by Department Data');
    } else if (eventKey === 'Roles') {
      console.log('Fetch Roles Data');
    }
  };

  return (
    <React.Fragment>
      
      <Card>
        <Card.Body>
          <Row>
            <Col>
            <Dropdown.Header>Select Report Type</Dropdown.Header>
            </Col>

            <Col>
              <DropdownButton
              title={selectedItem ? selectedItem : 'Select an Option'}
              onSelect={handleSelect}
              variant="success"
              id="dropdown-basic"
            >
              <Dropdown.Item eventKey="Employees by Department">Employees by Department</Dropdown.Item>
              <Dropdown.Item eventKey="Roles">Roles</Dropdown.Item>
              <Dropdown.Item eventKey="Employees by Pay Grade">Employees by Pay Grade</Dropdown.Item>
              <Dropdown.Item eventKey="Leaves given within last month">Leaves given within last month</Dropdown.Item>
              <Dropdown.Item eventKey="Employees by gender">Employees by gender</Dropdown.Item>
            </DropdownButton>
            </Col>
          </Row>
          
        </Card.Body>
      </Card>

      <Row className="d-flex justify-content-around">
        <Card className="deptChart">
          <Card.Header>{selectedItem || 'Employees by Department'}</Card.Header>
          <Card.Body className="d-flex justify-content-center align-items-center">
            <Col key={0} md={8} lg={8} xl={6} xxl={6}>
              <PieChart data={data} />
            </Col>
            
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}

export default Reports;

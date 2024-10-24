import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const LeaveRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use the useNavigate hook instead of Navigate function.
  const location = useLocation();
  const { details_list } = location.state || {};

  const ApproveLeave = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8000/leavings/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          leave_request_id: value, // Backend expects 'username'
          status_: 'a',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Approve Done');
        navigate('../Admin'); // Use navigate function to redirect.
      } else {
        console.error('Approve failed:', response.status);
      }
    } catch (error) {
      console.log('Error occurred:', error);
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const ApproveReject = async (value) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8000/leavings/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          leave_request_id: value, // Backend expects 'username'
          status_: 'r', // 'r' for rejected status
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Reject Done');
        navigate('../Admin');
      } else {
        console.error('Reject failed:', response.status);
      }
    } catch (error) {
      console.log('Error occurred:', error);
      setErrors({ submit: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <div
        className="auth-wrapper d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="d-flex justify-content-center align-items-center min-vh-100">
            <Card.Header>Leave Request Details</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group as={Row} className="mb-3" controlId="requestId">
                  <Form.Label column sm={4}>Request ID</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      defaultValue={details_list?.leave_request_id}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="employeeId">
                  <Form.Label column sm={4}>Employee ID</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      defaultValue={details_list?.employee_id}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="requestDate">
                  <Form.Label column sm={4}>Request Date</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="date"
                      defaultValue={details_list?.request_date}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="leaveStartDate">
                  <Form.Label column sm={4}>Leave Start Date</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="date"
                      defaultValue={details_list?.leave_start_date}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="periodOfAbsence">
                  <Form.Label column sm={4}>Period of Absence</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="number"
                      defaultValue={details_list?.period_of_absence}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="reason">
                  <Form.Label column sm={4}>Reason</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      defaultValue={details_list?.reason_for_absence}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="typeOfLeave">
                  <Form.Label column sm={4}>Type of Leave</Form.Label>
                  <Col sm={8}>
                    <Form.Control
                      type="text"
                      defaultValue={details_list?.type_of_leave}
                      readOnly
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="status">
                  <Form.Label column sm={4}>Request Status</Form.Label>
                  <Col sm={8}>
                    <Form.Control type="text" defaultValue="Pending" readOnly />
                  </Col>
                </Form.Group>

                <Row className="mt-4">
                  <Col>
                    <Button
                      variant="primary"
                      size="sm"
                      className="w-100"
                      onClick={() => {
                        ApproveLeave(details_list.leave_request_id);
                      }}
                      disabled={isSubmitting} // Disable button during submission
                    >
                      Approve
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="danger"
                      size="sm"
                      className="w-100"
                      onClick={() => {
                        ApproveReject(details_list.leave_request_id);
                      }}
                      style={{ background: '#b861ff' }}
                      disabled={isSubmitting}
                    >
                      Reject
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeaveRequestForm;

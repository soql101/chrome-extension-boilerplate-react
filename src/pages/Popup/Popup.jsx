import React, { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Popup.css';

const Popup = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [daysRemaining, setDaysRemaining] = useState(null);

  // Check if both eventName and eventDate are empty
  const isButtonDisabled = eventName.trim() === '' || eventDate === '';

  const handleSubmit = () => {
    if (eventName && eventDate) {
      const today = new Date();
      const selectedDate = new Date(eventDate);
      const timeDiff = selectedDate - today;
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      setDaysRemaining(daysRemaining);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Days Tracker</h1>
      </header>
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="eventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Event Name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="eventDate">
              <Form.Label>Event Date</Form.Label>
              <Form.Control
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center">
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              Track
            </Button>
          </Col>
        </Row>
        {daysRemaining !== null && (
          <Row>
            <Col>
              <p>Days Remaining: {daysRemaining} days</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Popup;

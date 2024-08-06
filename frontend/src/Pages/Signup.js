import React, { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/register', {
        name,
        email,
        password,
        phoneNumber,
      });

      setMessage(response.data.message);
      setSuccess(true);

      // Navigate to the login page after a successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage(error.response.data.message || 'Server Error');
      setSuccess(false);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5 w-25">
        <Form onSubmit={handleSubmit}>
          {message && <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>}

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhoneNo">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone no."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/login" className="btn btn-link">Already have an account? Login</Link>
        </Form>
      </Container>
    </>
  );
};

export default Signup;

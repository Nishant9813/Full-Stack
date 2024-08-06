import React, { useState } from 'react';
import { Form, Container, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import Header from '../Components/Header';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login', { email, password }, { withCredentials: true });
      localStorage.setItem('token', response.data.token);
      setError('');
      setSuccess(response.data.message);
      navigate("/", { replace: true });
      window.location.reload();
    } catch (err) {
     
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred while logging in.');
      }
      setSuccess('');
    }
  };

  return (
    <>
    <Header />
    <Container className="mt-5 w-25">
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default Login;

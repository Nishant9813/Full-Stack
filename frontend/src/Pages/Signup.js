import React from 'react'
import { Form, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Signup = () => {
  return (
    <>
    <Header />
    <Container className="mt-5 w-25" >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNo">
          <Form.Label>Phone No</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone no." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNo">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to="/login"></Link>
        </Form.Group>
      </Form>
    </Container>
    </>

  )
}

export default Signup
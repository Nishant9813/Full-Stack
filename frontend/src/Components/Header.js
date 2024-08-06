import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to="/" style={{textDecoration: "none"}}><Navbar.Brand>My Website</Navbar.Brand></Link>
      <div className="d-flex gap-5">
      <Link to="/signup" style={{textDecoration: "none"}}>Signup</Link>
      <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
      </div>
    </Container>
  </Navbar>
  )
}

export default Header
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:8000/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setUser(response.data.user);
        console.log(response.data.user);
      })
      .catch(error => {
        console.error("Error fetching user profile:", error);
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/user/logout', {}, { withCredentials: true });
      localStorage.removeItem('token');
      setUser(null);
      navigate('/login');
      window.location.reload();
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>My Website</Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          {user ? (
            <>
              <Nav.Link onClick={handleLogout} style={{ textDecoration: "none" }}>Logout</Nav.Link>
            </>
          ) : (
            <div className="d-flex gap-5">
              <Link to="/signup" style={{ textDecoration: "none" }}>Signup</Link>
              <Link to="/login" style={{ textDecoration: "none" }}>Login</Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

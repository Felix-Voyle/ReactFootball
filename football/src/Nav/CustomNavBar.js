import React from 'react';
import { Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Nav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomNavbar() {
  const { loginWithRedirect } = useAuth0();

  const handleLoginClick = () => {
    loginWithRedirect();
  };

  return (
    <Navbar className={styles.nav} bg="dark" variant="dark" expand="lg">
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarBrand className="mx-auto">App Name</NavbarBrand>
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleLoginClick}>Login</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
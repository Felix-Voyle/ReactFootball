import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Nav.module.css';

import { Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar className={styles.nav} bg="dark" variant="dark" expand="lg">
      <NavbarBrand>App Name</NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
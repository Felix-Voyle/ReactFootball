import React from 'react';

import styles from './Nav.module.css';

import { Navbar, Nav, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar className={styles.nav} bg="dark" variant="dark" expand="lg">
      <NavbarBrand href="#home">App Name</NavbarBrand>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
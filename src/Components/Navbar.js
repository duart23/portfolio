import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css';

import { useState } from 'react';



function Navigation() {
  return (
    <Navbar expand="lg" className='navbar sticky-top'>
      <Container>
        <Navbar.Brand href="/">Duarte Jorge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects">My Projects</Nav.Link>
            <Nav.Link href="#mypath">My path</Nav.Link>
            <Nav.Link href="#socials">Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../Navber/Navber.css'

const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Mohammad Al Amin</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ms-auto navbar-brand">
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#deets">Services</Nav.Link>
      <Nav.Link href="#deets">Projects</Nav.Link>
      <Nav.Link href="#deets">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navber;
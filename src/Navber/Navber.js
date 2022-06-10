import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navber/Navber.css'

const Navber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='home' className='fs-3' ><span className='logo'>MOHAMMAD ALAMIN</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ms-auto navbar-brand">
      <Nav.Link as={Link} to='home'>HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#services">SERVICES</Nav.Link>
      <Nav.Link href="#projects">PROJECTS</Nav.Link>
      <Nav.Link href="#contact">CONTACT ME</Nav.Link>
      <Nav.Link as={Link} to="/blogs">MY BLOG</Nav.Link>
  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navber;
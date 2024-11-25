import React from 'react';
import { FaCarAlt } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './../css/Home.css';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

const Home = () => {

  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  const handleMouseEnter = () => setShowBlogDropdown(true);
  const handleMouseLeave = () => setShowBlogDropdown(false); 

  return (
    <div>
      <Navbar expand="lg" className="bg-body-white" sticky="">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="nav-brand">
              <FaCarAlt /><span className="ps-3 pt-5 title-head">Cental</span>
            </h1>
          </Navbar.Brand>
          {/* Modified toggle button */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className="custom-toggle-button"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Col className='r'>
            <Nav className="mx-auto nav-btn">
              <Nav.Link href="#link" className='nav-font'>Home</Nav.Link>
              <Nav.Link href="#link" className='nav-font'>About</Nav.Link>
              <Nav.Link href="#link" className='nav-font'>Service</Nav.Link>
              <Nav.Link href="#link" className='nav-font'>Blog</Nav.Link>
              <NavDropdown title="Page" className='nav-font nav-font1'  show={showBlogDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} >
                <NavDropdown.Item href="#action/3.1" className='nav-font nav-font-drop'>Our Feature</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='nav-font nav-font-drop'>Our Cars</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className='nav-font nav-font-drop'>Our Teams</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='nav-font nav-font-drop'>Testimonial</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className='nav-font'>Contact</Nav.Link>
            </Nav>
            </Col>
            <Button variant="danger" size="lg" className="ms-auto sign-btn">Sign In</Button>
            <Button variant="danger" size="lg" className="sign-btn ms-3">Register</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Home;

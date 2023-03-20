// import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  {FaHome}  from 'react-icons/fa';
import  {FaHeart}  from 'react-icons/fa';
import  {FaToggleOn}  from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
          <Link to='/'> 
        <Navbar.Brand  href="#"><FaHome /></Navbar.Brand>
        </Link>
        <Link to='/'> 
        <Navbar.Brand href="#"><BiWorld /></Navbar.Brand>
        </Link>
        <Link to='/favorites'>
        <Navbar.Brand href="#"><FaHeart /></Navbar.Brand>
        </Link>
       
        <Navbar.Brand href="#"><FaToggleOn /></Navbar.Brand>
       
                <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  }
export default MyNavbar
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MR.CHEF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link to="home">Home</Nav.Link>
            <Nav.Link to="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="">Profile</Nav.Link>
            <Nav.Link to="">
                <Button variant='info'>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        
        
        
        
        
        
        
        
        
        
        
        
        // <nav className=''>
        //         {/* <div>
        //             <h2 className='text-white'>MR.CHEF</h2>
        //         </div>
        //         <div>
        //         <Link to="home">Home</Link>
        //         <Link to="blog">Blog</Link>
        //         <Link to="contact">Cotact</Link>
        //         </div>
        //         <div>
        //         <Link to="login">Login</Link>
        //         <Link to="register">Register</Link>
        //         </div> */}
        // </nav>
    );
};

export default Header;
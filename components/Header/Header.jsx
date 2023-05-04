import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fs-3 font-bold' href="#home">MR.CHEF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
              <Link className='text-secondary' to={'/'}>Home</Link>
              <Link className='text-secondary' to={'/blog'}>Blog</Link>
              <Link className='text-secondary' to={'/contact'}>Contact</Link>
          </Nav>
          <Nav>
            {user && <Nav.Link to="">{user.displayName}</Nav.Link>}
                {/* {user ?
                <Button variant='info'>LogOut</Button>: */}
                <Link to={'/login'}><Button variant='info'>Login</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
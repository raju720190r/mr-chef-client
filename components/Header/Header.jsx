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
        <Navbar.Brand href="#home">MR.CHEF</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link className='text-secondary' to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link className='text-secondary' to={'/blog'}>Blog</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {user && <Nav.Link to="">{user.displayName}</Nav.Link>}
            <Nav.Link to="">
                {user ?
                <Button variant='info'>LogOut</Button>:
                <Link to={'/login'}>
                <Button variant='info'>Login</Button>
                </Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
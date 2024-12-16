import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     <Navbar bg="white" data-bs-theme="light" className='shadow'>
        <Container className='py-2'>
          <Navbar.Brand><Link to={'/'} style={{textDecoration:"none", color:'black'}}><i className="fa-solid fa-cart-shopping pe-2" bounce style={{color: "#000000",}} />e-<span className='text-warning'>K</span>art</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to={'/'} style={{textDecoration:"none", color:'grey'}}>Home</Link></Nav.Link>
            <Nav.Link style={{color:'grey'}}>Features</Nav.Link>
          </Nav>
          <button className='btn btn-success ms-auto'>Login</button>
        </Container>
      </Navbar> 
    </>
  )
}

export default Header

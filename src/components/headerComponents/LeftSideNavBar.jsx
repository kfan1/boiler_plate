import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

export default function LeftSideNavBar() {
  return (
    <Nav className='me-auto'>
      <Nav.Link as={NavLink} to='/'>
        Home
      </Nav.Link>
      <Nav.Link as={NavLink} to='/hello'>
        Hello
      </Nav.Link>
      <Nav.Link href='https://www.youtube.com'>Youtube</Nav.Link>
      <NavDropdown title='Dropdown'>
        <NavDropdown.Item href='https://google.com'>Google</NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to='/hello'>
          Also Hello
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href=''>Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link disabled={true} to=''>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

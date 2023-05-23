import React from 'react';
import { Nav, NavDropdown, NavLink } from 'react-bootstrap';

export default function LeftSideNavBar() {
  return (
    <Nav className='me-auto' navbarSupportedContent>
      <Nav.Link href=''>Home</Nav.Link>
      <Nav.Link href=''>Link</Nav.Link>
      <NavDropdown title='Dropdown'>
        <NavDropdown.Item href=''>Action</NavDropdown.Item>
        <NavDropdown.Item href=''>Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href=''>Something else here</NavDropdown.Item>
      </NavDropdown>
      <NavLink disabled={true}>Disabled</NavLink>
    </Nav>
  );
}

import React from 'react';
import RightSideNavBar from '../components/headerComponents/RightSideNavBar';
import LeftSideNavBar from '../components/headerComponents/LeftSideNavBar';
import { useSelector } from 'react-redux';
import { Container, Navbar } from 'react-bootstrap';

export default function header() {
  const myState = useSelector((state) => state.appSlice.myState);

  return (
    <Navbar expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>{myState}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <LeftSideNavBar />
          <RightSideNavBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from 'react';
import RightSideNavBar from '../components/headerComponents/RightSideNavBar';
import LeftSideNavBar from '../components/headerComponents/LeftSideNavBar';
import { useSelector } from 'react-redux';

export default function header() {
  const myState = useSelector((state) => state.appSlice.myState);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href=''>
          {myState}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <LeftSideNavBar />
          <RightSideNavBar />
        </div>
      </div>
    </nav>
  );
}

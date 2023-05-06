import React from 'react';



export default function navLink({ nav, link }) {


  return (
    <li className='nav-link-list'>
      <a className={`nav-link`}  href={link}>
        {nav}
      </a>
    </li>
  );
}

import React from 'react';
import { Link } from "react-router-dom";


export default function navLink({ nav, link }) {
  return (
    <li className='nav-link-list'>
      <Link className='nav-link' to={link}>
        {nav}
      </Link>
    </li>
  );
}

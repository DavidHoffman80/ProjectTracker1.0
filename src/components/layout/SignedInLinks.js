import React from 'react';
import { NavLink } from 'react-router-dom';
// CSS
import './SignedInLinks.css';

const SignedInLinks = () => {
  return (
    <ul className='user-links'>
      <li><NavLink to='/'>New Project</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='avatar'>DH</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
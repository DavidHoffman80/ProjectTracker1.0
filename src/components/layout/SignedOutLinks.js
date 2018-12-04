import React from 'react';
import { NavLink } from 'react-router-dom';
// CSS
import './SignedOutLinks.css';

const SignedOutLinks = () => {
  return (
    <ul className='user-links signup-links'>
      <li><NavLink to='/'>Sign Up</NavLink></li>
      <li><NavLink to='/'>Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;
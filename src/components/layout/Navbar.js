import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import './Navbar.css';
// COMPONENTS
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className='NavBar'>
      <h1><Link to='/' className='brand-title'>ProjectTracker<span>1.0</span></Link></h1>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
  )
}

export default Navbar;
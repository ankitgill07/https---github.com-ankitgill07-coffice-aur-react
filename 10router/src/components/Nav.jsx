import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Nav() {
  return (
    <nav>
      <Link to="/" className='heads' >Home</Link>
      <Link to="/about" className='heads' >About</Link>
      <Link to="/conents" className='heads' >Conents</Link>
    </nav>
  );
}

export default Nav;


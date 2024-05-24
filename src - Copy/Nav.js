import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav() {
  return (
    <div>
        <h1>Nav</h1>
        <Link to="/home">HOME</Link> 
        <Link to="/about">ABOUT</Link> 
    </div>
  );
}

export default Nav;

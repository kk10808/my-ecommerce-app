import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="images/logo.png" alt="Logo" />
        </div>
        <div className="company-name">Company Name</div>
      </div>
      <div className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function CustomHeader() {
  return (
    <>
      <div className="custom-header">
        <div className="custom-logo">
          <img src="custom-images/logo.png" alt="Custom Logo" />
        </div>
        <div className="custom-company-name">Custom Company Name</div>
      </div>
      <div className="custom-navbar">
        <div className="custom-nav-links">
          <Link to="/">Custom Home</Link>
          <Link to="/custom-products">Custom Products</Link>
          <Link to="/custom-login">Custom Login</Link>
        </div>
      </div>
    </>
  );
}

export default CustomHeader;

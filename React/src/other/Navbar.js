import React from 'react';
import Desktopmenu from './Desktopmenu';
import Mobilemenu from './Mobilemenu';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo"></div>

        {/* Desktop view */}
        <div className="desktop-menu">
          <Desktopmenu />
        </div>

        {/* Mobile view */}
        <div className="mobile-menu">
          <Mobilemenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
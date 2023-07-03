import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Football Academy</div>
      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/facilities">Facilities</Link>
        </li>
        <li className="nav-link">
          <Link to="/coaches">Coaches</Link>
        </li>
        <li className="nav-link">
          <Link to="/programs">Programs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

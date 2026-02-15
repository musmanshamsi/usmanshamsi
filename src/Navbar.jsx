import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper to close menu on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          Usman<span className="logo-dot">.</span>
        </a>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          
          {/* --- NEW: Dropdown Menu for Interests --- */}
          <li className="dropdown">
            <a href="#interests" className="dropdown-trigger" onClick={closeMenu}>
              Interests <span className="chevron">▾</span>
            </a>
            {/* The Plate */}
            <ul className="dropdown-menu">
              <li><a href="#travel" onClick={closeMenu}>Travel</a></li>
              <li><a href="#writings" onClick={closeMenu}>Writings</a></li>
              <li><a href="#photography" onClick={closeMenu}>Photography</a></li>
            </ul>
          </li>

          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="/Usman_CV.pdf" className="cv-btn" target="_blank" rel="noreferrer" onClick={closeMenu}>
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
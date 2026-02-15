import React from 'react';
import './Footer.css'; // Make sure to link the CSS file

const Footer = () => {
  // Automatically updates the copyright year
  const currentYear = new Date().getFullYear();

  // Smooth scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Top Call to Action */}
        <div className="footer-top">
          <h2 className="footer-heading">Let's build something amazing together.</h2>
          <a href="mailto:your@email.com" className="footer-cta">Get in Touch &rarr;</a>
        </div>
        
        <div className="footer-divider"></div>
        
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-name">Usman.</span>
            <p className="brand-tagline">Innovative Creator & Developer</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#interests">Interests</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="link-group">
              <h4>Socials</h4>
              {/* Added rel="noopener noreferrer" for security on external links */}
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            </div>
          </div>
        </div>
        
        {/* Copyright & Back to Top */}
        <div className="footer-legal">
          <p>&copy; {currentYear} Usman Shamsi. All rights reserved.</p>
          <a href="#top" onClick={scrollToTop} className="back-to-top">Back to Top &uarr;</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
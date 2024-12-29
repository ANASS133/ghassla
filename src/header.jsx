import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <button className="cta-button">
          <a aria-label="Chat on WhatsApp" href="https://wa.me/353871683234" target="_blank" rel="noopener noreferrer">
          جرب غسلة الآن</a>
</button>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#faq-section">Q&A</a></li>
            <li><a href="#">خدماتنا</a></li>
            <li><a href="#most-sales-container">عروضنا</a></li>
            <li><a href="#container1">لماذا تختارنا</a></li>
            <li><a href="#">عن غسلة</a></li>

          </ul>
        </nav>

        {/* Logo */}
        <div className="logo">
          <img src="ghassla1.png" className="ghassla" alt="description" style={{ backgroundColor: 'transparent' }} />
        </div>

        {/* Menu Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <img src="menu1.png" alt="Menu Icon" className="menu-icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;

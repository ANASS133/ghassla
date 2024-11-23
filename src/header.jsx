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
        {/* Call-to-Action Button */}
        <button className="cta-button">جرب غسلة الآن</button>

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#">عن غسلة</a></li>
            <li><a href="#">العروض و الخدمات</a></li>
            <li><a href="#faq-section">الأسئلة الشائعة</a></li>
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

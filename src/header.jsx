import React from 'react';
import './App.css'; // Import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="container">
      <button className="cta-button">جرب غسلة الآن</button>

        <nav>
          <ul className="nav-links">
            <li><a href="#faq-section">عن غسلة</a></li>
            <li><a href="#">العروض و الخدمات</a></li>
            <li><a href="#">الأسئلة الشائعة</a></li>
          </ul>
        </nav>
        <div className="logo">
        <img src="ghassla1.png" className="ghassla" alt="description" style={{ backgroundColor: 'transparent' }} />
        </div>
      </div>
    </header>
  );
}

export default Header;

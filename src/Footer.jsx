import React from "react";
import ReactDOM from 'react-dom'
import "./End.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-icons">
<a aria-label="Chat on WhatsApp" href="https://wa.me/353871683234"  target="_blank" rel="noopener noreferrer">
<img alt="Chat on WhatsApp" src="whatsapp.png" /></a>
      
        </div>
        <div className="footer-links">
          <a href="#about">عن غسلة</a>
          <a href="#contact">تواصل معنا</a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-terms">
          <a href="#privacy">سياسة الخصوصية</a> |
          <a href="#faq"> الأسئلة الشائعة</a> |
          <a href="#rights">حقوق الملكية</a> |
          <a href="#locations">المناطق المتاحة</a>
        </div>
        <div className="footer-copy">
          جميع الحقوق محفوظة، شركة سويتر لغسيل السيارات 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./End.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-back-to-top">
        <button 
          className="back-to-top-button" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          الرجوع للأعلى
        </button>
      </div>
      <br /><br />
      <div className="footer-top">
      <div className="social-icons">
  <a aria-label="Chat on WhatsApp" href="https://wa.me/353871683234" target="_blank" rel="noopener noreferrer">
    <div className="whatsapp-container">
      <img alt="Chat on WhatsApp" src="whatsapp.png" />
      <span className="whatsapp-message">حاب تحجز موعد معانا اليوم</span>
    </div>
  </a>
</div>

        <div className="footer-links">
          <a href="#about">عن غسلة</a>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/353871683234" target="_blank" rel="noopener noreferrer">
          تواصل معنا
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-terms">
          <a href="#privacy">سياسة الخصوصية</a> |
          <a href="#faq"> الأسئلة الشائعة</a> |
          <a href="#rights">حقوق الملكية</a> |
          <a href="#locations">المناطق المتاحة</a>
        </div>
        <div className="footer-copy">
          جميع الحقوق محفوظة، شركة غسلة لغسيل السيارات 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;

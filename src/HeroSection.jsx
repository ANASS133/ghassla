import React from "react";
import './End.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>أضف القوة والتميز إلى مشروعك مع غسلة</h1>
        <p>
          هل لديك مشروع في مجال غسيل السيارات أو مجال آخر وتستخدم فيه دراجات أو معدات خاصة، 
          وترغب في تطويره وتحويله إلى فرنشايز ناجح تحت مظلة غسلة؟
        </p>
        <div className="hero-buttons">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/353871683234"  target="_blank" rel="noopener noreferrer">
          <button className="try-button">تواصل معنا</button></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


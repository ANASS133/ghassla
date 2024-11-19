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
          <button className="try-button">جرب غسلة الآن</button>
          <button className="more-button">معرفة المزيد</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


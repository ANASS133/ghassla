import React from 'react';
import './features2.css';

const Features2 = () => {
  return (
    <div className="features2-container">
      <div className="features2">
        <div className="logo">
          <p>مميزات غسلة</p>
        </div>
        <div className="features-list">
          <div className="feature">
            <img src="iconscleaning.png" alt="الجودة في الغسيل" />
            <p>الجودة في الغسيل</p>
          </div>
          <div className="feature">
            <img src="iconstime.png" alt="سرعة التنفيذ" />
            <p>سرعة التنفيذ</p>
          </div>
          <div className="feature">
            <img src="iconssettings.png" alt="دقة في المواعيد" />
            <p>دقة في المواعيد</p>
          </div>
          <div className="feature">
            <img src="iconsdocument.png" alt="باقات لا محدودة" />
            <p>باقات لا محدودة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;

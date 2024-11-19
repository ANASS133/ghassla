import React from 'react';
const RightSection = () => {
  return (
    <div className="right-section">
      <img src='njma.png' alt="Icon" className="right-section-icon" />
      <h4>المزايا التنافسية</h4>
      <h2>لماذا تختار غسلة؟</h2>
      <p className="description">
        هناك الكثير من تطبيقات غسيل السيارات منتشرة حول العالم، ولكن ما يميز سويتر هو السرعة
        والالتزام بالمواعيد والجودة العالية... تعرف معنا بالتفصيل على مزايا تطبيق سويتر أفضل تطبيق غسيل سيارات:
      </p>
      <button className="try-button">جرب غسلة الآن</button>
    </div>
  );
};

export default RightSection;

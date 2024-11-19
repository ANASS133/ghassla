import React from 'react';
import './App.css';

const Cards = () => {
  const features = [
    {
      icon: '/like.png', 
      title: 'التكلفة المعقولة',
      description: 'يقدم تطبيق سويتر تكاليف مناسبة لجميع المستخدمين من مختلف فئات المجتمع.',
    },
    {
      icon: '/handy.png', 
      title: 'سهولة الطلب',
      description: 'يملك التطبيق واجهة بسيطة حيث يمكنك طلب خدمة غسيل سيارتك بكل سهولة بخطوات بسيطة.',
    },
    {
      icon: '/star.png', 
      title: 'مواد تنظيف مميزة',
      description: 'يخصص التطبيق أفضل الفرشاة وخدمات التنظيف للحصول على أفضل مستوى من التنظيف.',
    },
    {
      icon: '/maart.png', 
      title: 'مهارة عالية',
      description: 'الهدف الرئيسي لدى سويتر هو تقديم خدمات تنظيف عالية الجودة مع الالتزام بالمواعيد.',
    },
  ];

  return (
      <div className="content">
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <img src={feature.icon} alt={feature.title} className="icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Cards;

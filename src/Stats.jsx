import React from 'react';
import './Stats.css';

const Stats = () => {
  const statsData = [
    {
      icon: '/car.svg', // Replace with the actual path to your image
      title: 'سيارة تم غسلها',
      value: '20 الف ',
    },
    {
      icon: '/heart.svg',
      title: 'نسبة رضى العميل',
      value: '96%',
    },
    {
      icon: '/house.svg',
      title: 'جهات شراكة',
      value: '+50',
    },
    {
      icon: '/phone.svg',
      title: 'تقييم التطبيق',
      value: '+4.7',
    },
  ];

  return (
    <div className="stats-container">
      <div className="stats-left">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.title} />
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="stats-right">
        <div className="highlight-card">
          <div className="highlight-icon">
            <img src="/poeple.svg" alt="Clients" />
          </div>
          <h1> عميل يعتمد على غسلة</h1>
          <p>5,768</p>
        </div>
      </div>
      <div className="stats-left2">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.title} />
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

import React from "react";

const MostSales = ({ title, subtitle, price, discountPrice, image, rating }) => {
  return (
    <>
    <div className="most-sales-card">
      <img src={image} alt={title} className="most-sales-image" />
      <div className="most-sales-content">
        <h2 className="most-sales-title">{title}</h2>
        <p className="most-sales-subtitle">{subtitle}</p>
        <div className="most-sales-price">
          <span className="most-sales-discount-price">{discountPrice}</span>
          <span className="most-sales-original-price">{price}</span>
          <div className="most-sales-rating">⭐{rating}</div>
        </div>
        
      </div>
    </div></>
  );
};

const MostSalesA = () => {
  const mostSalesItems = [
    {
      title: "عرض نهاية السنة 20 غسلة",
      subtitle: "غسلة فقط بـ 599 درهم",
      price: "1300 DH",
      discountPrice: "520.87 DH",
      image: "./most1-min.png",
      rating: "5",
    },
    {
        title: "عرض نهاية السنة 10 غسلة",
        subtitle: "20 غسلة فقط بـ 299 درهم",
        price: "1300 DH",
        discountPrice: "520.87 DH",
        image: "./most5-min.png",
        rating: "5",
      },
    {
      title: "عرض نهاية السنة 10 غسلات",
      subtitle: "10 غسلات فقط بـ 399 درهم",
      price: "650 DH",
      discountPrice: "346.96 DH",
      image: "most2-min.png",
      rating: 5,
    },
    {
      title: "الباقة الخارجية",
      subtitle: "تجاوزنا الحدود بـ 499 درهم",
      price: "699 DH",
      discountPrice: "433.91 DH",
      image: "most3-min.png",
      rating: 5,
    },
    {
      title: "الباقة الخارجية",
      subtitle: "Let Your Car Shine",
      price: "65 DH",
      discountPrice: "52 DH",
      image: "most4-min.png",
      rating: 5,
    },
  ];

  return (
    <>
        <div className="most-sales-header" id="most-sales-header">
        <h2> الأكثر مبيعاً</h2>
      </div>
    <div className="most-sales-container">
      {mostSalesItems.map((item, index) => (
        <MostSales key={index} {...item} />
      ))}
    </div></>
  );
};

export default MostSalesA;

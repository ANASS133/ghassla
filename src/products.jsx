import React from "react";

const Product = ({ title, subtitle, price, discountPrice, image, rating }) => {
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

const ProductA = () => {
    const ProductItems = [
      {
        title: "تخفيض على فرش السيارة",
        subtitle: "فرش سيارة فاخر يبدأ من 299 درهم فقط",
        price: "500 درهم",
        discountPrice: "299 درهم",
        image: "./prd1-min.png",
        rating: "5",
      },
      {
        title: "عرض قفازات القيادة",
        subtitle: "قفازات قيادة عالية الجودة فقط بـ 149 درهم",
        price: "250 درهم",
        discountPrice: "149 درهم",
        image: "./prd2-min.png",
        rating: "4.5",
      },
      {
        title: "بطاقة هدية مميزة",
        subtitle: "فاجئ أحبائك ببطاقة هدية بقيمة 500 درهم",
        price: "500 درهم",
        discountPrice: "500 درهم",
        image: "./prd3-min.png",
        rating: "5",
      },
    ];
  
  return (
    <>
        <div className="most-sales-header">
        <h2> منتوجاتنا</h2>
      </div>
    <div className="most-sales-container">
      {ProductItems.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div></>
  );
};

export default ProductA;

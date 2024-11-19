import React, { useState } from "react";
import "./Questions.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "ما هي الخدمات التي يقدمها تطبيق غسلة؟",
      answer: "تطبيق غسلة يقدم خدمات غسيل السيارات بجودة عالية، بالإضافة إلى مواد تنظيف مميزة ومهارات فائقة.",
    },
    {
      question: "كيف يمكنني طلب الخدمة من تطبيق غسلة؟",
      answer: "يمكنك طلب الخدمة بسهولة عن طريق تحميل التطبيق وتحديد موقعك واختيار الخدمة المطلوبة.",
    },
    {
      question: "ما هي تكلفة الخدمة؟",
      answer: "التطبيق يوفر خدمات بأسعار تناسب مختلف الفئات لضمان رضا العملاء.",
    },
    {
      question: "هل يمكنني تحديد موعد مسبق لغسيل السيارة؟",
      answer: "نعم، يمكنك تحديد موعد مسبق عبر التطبيق لضمان توفير الخدمة في الوقت المناسب.",
    },
    {
      question: "هل مواد التنظيف المستخدمة آمنة على السيارات؟",
      answer: "بالتأكيد، يتم استخدام مواد تنظيف آمنة وفعالة للحفاظ على جودة وأمان سيارتك.",
    },
    {
      question: "ما هي المناطق التي يغطيها تطبيق غسلة؟",
      answer: "التطبيق يغطي معظم المدن الرئيسية، مع خطط للتوسع في المستقبل لتشمل جميع المناطق.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 className="faq-title">أسئلة شائعة</h2>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
            <div className="faq-question">{item.question}</div>
            <div
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

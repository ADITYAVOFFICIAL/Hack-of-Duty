import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'What is Hack of Duty?',
    answer: 'Hack of Duty is an exciting hackathon that brings together developers and innovators to solve real-world problems.',
  },
  {
    question: 'Who can participate?',
    answer: 'Anyone with an interest in coding and innovation can participate in Hack of Duty.',
  },
  {
    question: 'How do I register?',
    answer: 'You can register via the Devfolio platform. The link will be available soon.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" id='faq'>
      <h2 className="faq-title">FAQs</h2>
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

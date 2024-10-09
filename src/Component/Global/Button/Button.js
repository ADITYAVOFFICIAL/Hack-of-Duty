// src/Component/Global/Button/Button.js
import React from 'react';
import './Button.css';

export default function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
}
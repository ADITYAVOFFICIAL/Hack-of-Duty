// src/Component/Global/Button/Button.js
import React from 'react';
import './Button.css';

export default function Button({ text, onClick, icon, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
}

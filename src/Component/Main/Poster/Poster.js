// src/Component/Main/Poster/Poster.js
import './Poster.css';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Poster() {
  return (
    <div className="poster-container">
      <img src="./images/main page/poster/poster.gif" alt="Poster" className="poster-image" />
    </div>
  );
}
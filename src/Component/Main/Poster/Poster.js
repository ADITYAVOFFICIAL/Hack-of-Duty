import './Poster.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

export default function Poster() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="poster-container">
      <img src="./images/main page/poster/poster.gif" alt="Poster" className="poster-image" />
      <div 
        className="apply-button" 
        data-hackathon-slug="hack-of-duty" 
        data-button-theme="light" 
        style={{ height: '44px', width: '312px' }}
      ></div>
    </div>
  );
}

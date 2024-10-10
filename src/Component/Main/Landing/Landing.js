// src/Component/Main/Landing/Landing.js
import './Landing.css';
import Button from './../../Global/Button/Button';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Landing() {
  const [isMuted, setIsMuted] = useState(true);

  const handleLearnMoreClick = () => {
    document.getElementById('tickets-section').scrollIntoView({ behavior: 'smooth' });
  };

  const redirectToDevfolio = () => {
    window.open('https://devfolio.co/discover', '_blank');
  };

  const toggleMute = () => {
    const video = document.querySelector('.video-bg');
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="containers">
      {/* Background Video */}
      <video autoPlay loop muted={isMuted} className="video-bg">
        <source src="/images/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <section>
        <div className='logo-image'>
          <img src="./images/main page/landing-part/cod-mw2-logo.png" alt="mw2 logo" />
        </div>
        <div>
          <h2 className='headingtext'>SRMSIGKDD's FLAGSHIP HACKATHON</h2>
          <div className='buttons-box'>
            <Button text={'register now'} onClick={redirectToDevfolio}/>
            <Button text={'Learn More'} onClick={handleLearnMoreClick} />
          </div>
        </div>
      </section>

      <div className="mute-icon" onClick={toggleMute}>
        <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
      </div>
    </div>
  );
}
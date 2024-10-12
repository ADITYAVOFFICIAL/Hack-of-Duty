import './Landing.css';
import Button from './../../Global/Button/Button';
import { useState, useEffect, useMemo } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Landing() {
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  // Determine the correct video source based on isMobile
  const videoSrc = useMemo(() => (isMobile ? "/images/mobile.mp4" : "/images/hero.mp4"), [isMobile]);

  return (
    <div className="containers">
      {/* Background Video */}
      <video key={isMobile} autoPlay loop muted={isMuted} className="video-bg">
        <source src={videoSrc} type="video/mp4" />
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

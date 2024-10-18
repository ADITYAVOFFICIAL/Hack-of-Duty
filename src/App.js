import React from 'react';
import Footer from './Component/Footer/Footer';
import NavBar from './Component/Header/NavBar';
import GetGame from './Component/Main/GetGame/GetGame';
import Grid from './Component/Main/Grid/Grid';
import Landing from './Component/Main/Landing/Landing';
import Slider from './Component/Main/Slider/Slider';
import Poster from "./Component/Main/Poster/Poster";
import { AudioProvider } from './Component/Global/AudioContext/AudioContext';
import CountdownTimer from './Component/Global/Timer/CountdownTimer';

export default function App() {
  // Load the Devfolio SDK
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <NavBar />
      <Landing />
      <CountdownTimer />
      <Grid />
      <AudioProvider>
        <GetGame />
      </AudioProvider>
      <Slider />
      <Poster />

      {/* Apply with Devfolio Button */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <div 
          className="apply-button" 
          data-hackathon-slug="hackofduty" 
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        ></div>
      </div>

      <Footer />
    </>
  );
}

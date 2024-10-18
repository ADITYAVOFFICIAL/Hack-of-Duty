import React, { Suspense } from 'react';
import NavBar from './Component/Header/NavBar';
import Footer from './Component/Footer/Footer';
import CountdownTimer from './Component/Global/Timer/CountdownTimer';
import { AudioProvider } from './Component/Global/AudioContext/AudioContext';
const Landing = React.lazy(() => import('./Component/Main/Landing/Landing'));
const Grid = React.lazy(() => import('./Component/Main/Grid/Grid'));
const GetGame = React.lazy(() => import('./Component/Main/GetGame/GetGame'));
const Slider = React.lazy(() => import('./Component/Main/Slider/Slider'));

export default function App() {
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
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <CountdownTimer />
        <Grid />
        <AudioProvider>
          <GetGame />
        </AudioProvider>
        <Slider />
      </Suspense>
      <Footer />
    </>
  );
}
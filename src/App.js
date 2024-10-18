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
  return (
    <>
      <NavBar />
      <Landing />
      <CountdownTimer /> {/* Add the CountdownTimer component */}
      <Grid />
      <AudioProvider>
        <GetGame />
      </AudioProvider>
      <Slider />
      <Poster />
      <Footer />
    </>
  );
}

import React, { createContext, useContext, useRef } from 'react';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio('/desc.mp3'));
  const isPlayingRef = useRef(false);

  const playAudio = () => {
    if (!isPlayingRef.current) {
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      isPlayingRef.current = true;
    }
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    isPlayingRef.current = false;
  };

  const resetAudio = () => {
    audioRef.current.currentTime = 0;
  };

  return (
    <AudioContext.Provider value={{ playAudio, pauseAudio, resetAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

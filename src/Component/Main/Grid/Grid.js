import React, { useRef } from 'react';
import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

export default function Grid() {
  const dataList = [
    { image: './images/main page/grid-pics-part/1.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 1' },
    { image: './images/main page/grid-pics-part/2.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 2' },
    { image: './images/main page/grid-pics-part/3.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 3' },
    { image: './images/main page/grid-pics-part/result.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 4' }
  ];

  // Ref to the audio elements
  const audioRef = useRef(null);
  const winnerAudioRef = useRef(null);

  // Function to play the sound
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // Function to play the winner sound
  const playWinnerSound = () => {
    if (winnerAudioRef.current) {
      winnerAudioRef.current.play();
    }
  };

  return (
    <div className="container-grid-part" id="rounds">
      <audio ref={audioRef} src="https://srmsigkdd-cdn.netlify.app/images/hackofduty/btn.mp3" preload="auto" />
      <audio ref={winnerAudioRef} src="https://srmsigkdd-cdn.netlify.app/images/hackofduty/winner.mp3" preload="auto" />
      <div id="tickets-section" className="one">
        <img src="./images/main page/grid-pics-part/bo3.webp" alt="cld icon" />
        <div className="text-box">
          <span className="prizepool">PRIZE POOL</span>
          <Button text={"30,000 INR"} className="large-button" onClick={playWinnerSound} />
          <Button text={"1st: 15,000 INR"} className="small-button" onClick={playSound} />
          <Button text={"2nd: 10,000 INR"} className="small-button" onClick={playSound} />
          <Button text={"3rd: 5,000 INR"} className="small-button" onClick={playSound} />
        </div>
      </div>
      <div className="grid-items-container">
        {dataList.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

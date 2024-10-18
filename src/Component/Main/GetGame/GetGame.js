import './GetGame.css';
import GameItem from '../../Global/GameItem/GameItem';

export default function GetGame() {
  const gameData = [
    {
      image: './images/main page/get-the-game-part/1.webp', 
      text: 'Computer Vision', 
      description: 'Deploy AI like a UAV: train models to spot and track every target. Your mission: no object left unseen.'
    },
    {
      image: './images/main page/get-the-game-part/2.webp', 
      text: 'Natural Language Processing', 
      description: 'Command your models to understand and respond like a top-tier operator. Crack the code of human language!'
    },
    {
      image: './images/main page/get-the-game-part/3.webp', 
      text: 'EdTech', 
      description: 'Revolutionize learning with tactical tools that enhance education. Equip students and educators for victory!'
    },
    {
      image: './images/main page/get-the-game-part/4.webp', 
      text: 'Healthcare', 
      description: 'Develop life-saving tech with AI-powered diagnostics and systems that improve patient care. Your mission: save lives!'
    }
  ];

  return (
    <div className="container-game" id="tracks">
      <h1 className='title font-bold'>Tracks</h1>
      <div className='game-tainer'>
        {gameData.map((game, index) => (
          <a href="#" key={index} className='overlay-text'>
            <GameItem {...game} />
          </a>
        ))}
      </div>
    </div>
  );
}

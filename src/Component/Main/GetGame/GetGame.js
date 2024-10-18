import './GetGame.css';
import GameItem from '../../Global/GameItem/GameItem';

export default function GetGame() {

  const gameData = [
    {
      image: './images/main page/get-the-game-part/1.webp', 
      text: 'Computer Vision', 
      description: 'Explore how machines can interpret and understand visual information from the world.'
    },
    {
      image: './images/main page/get-the-game-part/2.webp', 
      text: 'Natural Language Processing', 
      description: 'Dive into the interaction between computers and humans through natural language.'
    },
    {
      image: './images/main page/get-the-game-part/3.webp', 
      text: 'EdTech', 
      description: 'Discover the future of education through technology-driven learning solutions.'
    },
    {
      image: './images/main page/get-the-game-part/4.webp', 
      text: 'Healthcare', 
      description: 'Learn about innovations in healthcare and how technology is transforming patient care.'
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

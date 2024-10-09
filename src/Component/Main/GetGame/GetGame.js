import './GetGame.css';
import GameItem from '../../Global/GameItem/GameItem';

export default function GetGame() {

  const gameData = [
    {image: './images/main page/get-the-game-part/1.webp', text: 'Computer Vision'},
    {image: './images/main page/get-the-game-part/2.webp', text: 'Natural Language Processing'},
    {image: './images/main page/get-the-game-part/3.webp', text: 'EdTech'},
    {image: './images/main page/get-the-game-part/4.webp', text: 'Healthcare'}
  ]

  return (
    <>
    <div className="container-game">
      <h1 className='title'>Tracks</h1>
      <div className='game-tainer'>
        <a href="#"><GameItem {...gameData[0]} /></a>
        <a href="#"><GameItem {...gameData[1]} /></a>
        <a href="#"><GameItem {...gameData[2]} /></a>
        <a href="#"><GameItem {...gameData[3]} /></a>
      </div>
    </div>
    </>
  )
}

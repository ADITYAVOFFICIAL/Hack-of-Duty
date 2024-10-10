import './GameItem.css';

export default function GameItem({image, text}) {
  return (
    <>
      <div className="container-get" onClick={(e) => e.preventDefault()}>
        <span className='text-detail' style={{ fontWeight: 'bold !important' }}>{text}</span>
        <img src={image} alt="game images" />
      </div>
    </>
  )
}
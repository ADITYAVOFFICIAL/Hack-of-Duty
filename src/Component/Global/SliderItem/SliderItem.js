import './SliderItem.css';

export default function SliderItem({image, text}) {
  return (
    <>
        <div className='item-tainer'>
            <div className="img-part">
                <img src={image} alt="slider image" />
            </div>
            <div className="detail">
                <span className='slidertxt'>{text}</span>
            </div>
        </div>
    </>
  )
}

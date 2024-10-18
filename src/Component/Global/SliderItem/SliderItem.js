import './SliderItem.css';

export default function SliderItem({ image, text, alt }) {
  return (
    <div className='item-tainer'>
      <div className="img-part">
        <img src={image} alt={alt} />
      </div>
      <div className="detail">
        <span className='slidertxt'>{text}</span>
      </div>
    </div>
  );
}

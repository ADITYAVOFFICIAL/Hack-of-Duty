import React from 'react';
import SliderItem from '../../Global/SliderItem/SliderItem';
import './Slider.css';

export default function Slider() {
  const sliderData = [
    { image: './images/main page/slider-games-part/google.png', text: 'Google' },
    { image: './images/main page/slider-games-part/aws.png', text: 'AWS' },
    { image: './images/main page/slider-games-part/mongo.png', text: 'MONGODB' },
    { image: './images/main page/slider-games-part/micro.png', text: 'MICROSOFT' },
    { image: './images/main page/slider-games-part/dominos.png', text: 'DOMINOS' },
    { image: './images/main page/slider-games-part/coco.png', text: 'COCOA COLA' }
  ];

  return (
    <div className="container-slider">
      <div className='header-detail'>
        <div className='title-part'>
          <span className='sponsorstitle'>Sponsors</span>
        </div>
      </div>
      <div className='slider-main'>
        <div className='slider-tainer'>
          <div className='slider-track'>
            {sliderData.map((item, index) => (
              <SliderItem key={index} {...item} />
            ))}
            {sliderData.map((item, index) => (
              <SliderItem key={index + sliderData.length} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
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
          <span>Sponsors</span>
        </div>
        <div className='filter-part'>
          <div className='filters'>
            <span>filter:</span>
          </div>
          <div className='buttons-filter'>
            <button className='no'></button>
            <button className='no'></button>
            <button className='no'></button>
            <button className='no'></button>
            <button className='no'></button>
          </div>
          <div className='view-all'>
            <a href="#">view all &gt;</a>
          </div>
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
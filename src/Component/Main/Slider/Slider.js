import React from 'react';
import SliderItem from '../../Global/SliderItem/SliderItem';
import './Slider.css';

export default function Slider() {
  const sliderData = [
    { image: './images/main page/slider-games-part/pol.png', text: 'Google', alt: 'POLYGON LOGO' },
    { image: './images/main page/slider-games-part/eth.png', text: 'AWS', alt: 'ETHINDIA LOGO' },
    { image: './images/main page/slider-games-part/devfolio.png', text: 'DEVFOLIO', alt: 'DEVFOLIO LOGO' },
    { image: './images/main page/slider-games-part/micro.png', text: 'MICROSOFT', alt: 'Microsoft Logo' },
    { image: './images/main page/slider-games-part/dominos.png', text: 'DOMINOS', alt: 'Dominos Logo' },
    { image: './images/main page/slider-games-part/coco.png', text: 'COCOA COLA', alt: 'Coca-Cola Logo' }
  ];

  return (
    <div className="container-slider" id="sponsors">
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

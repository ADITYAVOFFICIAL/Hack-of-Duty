import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

// src/Component/Main/Grid/Grid.js
export default function Grid() {
  const dataList = [
    {image: './images/main page/grid-pics-part/6.15-hub-s4-keyart-tout-small.jpg', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 1'},
    {image: './images/main page/grid-pics-part/6.21-hub-s4-wz-sm-tout.jpg', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 2'},
    {image: './images/main page/grid-pics-part/6.21-hub-s4-bp-sm-tout.jpg', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 3'},
    {image: './images/main page/grid-pics-part/cq5dam.thumbnail.319.319(8).jpg', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 4'}
  ]

  return (
    <>
        <div className="container-grid-part">
            <div id="tickets-section" className='one'>
              <img src=".\images\main page\grid-pics-part\CDLChampionship_2022_LOGO.png" alt="cld icon" />
              <div className="text-box">
              <span>PRIZE POOL</span>
              <Button text={"30,000 INR"} />
              </div>
            </div>
            <GridItem {...dataList[0]} />
            <GridItem {...dataList[1]} />
            <GridItem {...dataList[2]} />
            <GridItem {...dataList[3]} />
        </div>
    </>
  )
}
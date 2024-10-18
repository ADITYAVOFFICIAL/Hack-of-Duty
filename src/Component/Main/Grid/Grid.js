import GridItem from '../../Global/GridItem/GridItem';
import Button from './../../Global/Button/Button';
import './Grid.css';

export default function Grid() {
  const dataList = [
    { image: './images/main page/grid-pics-part/1.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 1' },
    { image: './images/main page/grid-pics-part/2.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 2' },
    { image: './images/main page/grid-pics-part/3.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 3' },
    { image: './images/main page/grid-pics-part/result.webp', logo: './images/main page/logos-part/gridlogo.svg', text: 'ROUND 4' }
  ];

  return (
    <div className="container-grid-part" id="rounds">
      <div id="tickets-section" className='one'>
        <img src="./images/main page/grid-pics-part/bo3.webp" alt="cld icon" />
        <div className="text-box">
          <span className='prizepool'>PRIZE POOL</span>
          <Button text={"30,000 INR"} className="large-button" />
          <Button text={"1st: 15,000 INR"} className="small-button" />
          <Button text={"2nd: 10,000 INR"} className="small-button" />
          <Button text={"3rd: 5,000 INR"} className="small-button" />
        </div>
      </div>
      {dataList.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  );
}

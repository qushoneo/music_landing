import styled from 'styled-components';
import '../App.css';
import data from './data.js';
import Card from './Card.js';
import ArrowBox from '../images/ArrowBox.svg';
import ArrowBoxRight from '../images/ArrowBoxRight.svg';


const FifthSection = styled.div`
  margin: 0 auto;
  width: 1110px;
  overflow-x: hidden;
  margin-top: 180px;
  .main{
    display: flex;
    justify-content: space-between;
  }
`

const FirstStyledImage = styled.img`
  position: absolute;
  margin-left: -80px;
  margin-top: 210px;
`

const SecondStyledImage = styled.img`
  position: absolute;
  margin-left: 1150px;
  margin-top: 210px;
`

const Slider = () => {
  let offset = 0;
  const sliderLine = document.querySelector("#fifthSection");

  document.querySelector('#slider-next').addEventListener('click', () => {
    offset = offset + 350;
    sliderLine.style.left = offset + 'px';
  });
}


const ToursSection = () => {
  return (
    <FifthSection id='fifthSection'>
      <div className='main'>
        <FirstStyledImage src={ArrowBox} />
        {data.map((card, index) => {
          return (
            <Card data={card} />
          );
        })}
        <SecondStyledImage onClick={() => Slider()} id='slider-next' src={ArrowBoxRight} />
      </div>
    </FifthSection>
  );
}

export default ToursSection;
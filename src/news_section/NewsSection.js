import styled from 'styled-components';
import '../App.css';
import Header from '../header/Header.js';
import QuotesPic from '../images/QuotesPic.png';
import NewsSectionPic from '../images/NewsSectionPic.png';

const SecondSection = styled.div`
  margin: 0 auto;
  width: 1110px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 313px;
  width: 100%;
  border: 1px solid #FFFFFF;
  border-radius: 30px 0px;
  margin-top: 238px;
  #QuotesPic{
    position: absolute;
    z-index: -1;
  }
  .QuotesAndText{
    color: white;
    font-size: 18px;
    line-height: 27px;
    p{
      font-weight: normal;
    }
    .Line{
      margin: 25px 0;
      border-bottom: 1px solid white;
      opacity: 0.6;
    }
    a{
      text-decoration: none;
      font-weight: bold;
      color: #7A66CC;
      margin-top: 25px;
    }
  }
`

const NewsSection = () => {
  return (
    <SecondSection>
      <Box>
        <div className='QuotesAndText'>
          <img id="QuotesPic" src={QuotesPic} alt='QuotesPic' />
            <p>
              “In an age where mainstream music is designed to be as<br/>easily consumed as possible, listening to Bright Lights is<br/>refreshing, to say the least. Her sound is perfect for radio<br/>but complex enough to separate her from other pop newcomers.”
            </p>
            <div className='Line'>
            </div>
            <a href="#">
              PopULove.net
            </a>
        </div>
        <div>
          <img src={NewsSectionPic} alt='NewsSectionPic'/>
        </div>
      </Box>
    </SecondSection>
  );
}

export default NewsSection;
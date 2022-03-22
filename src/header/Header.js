import styled from 'styled-components';
import '../App.css';
import Logo from '../images/Logo.png';
import LogoName from '../images/LogoName.png';
import PlayIco from '../images/PlayIco.png';
import Slider from '@mui/material/Slider';
import data from './data.js';


const StyledHeader = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 1110px;
`

const HeaderLine = styled.div`
 display: flex;
 justify-content: space-between;
`

const LogoContainer = styled.div`
  margin-top: 20px;
  margin-left: 80px;
  width: 223px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Nav = styled.div`
  margin-top: 20px;
  margin-right: 80px;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    line-height: 100%;
    color: #fff;
    text-decoration: none;
  }
`

const SecondLine = styled.p`
  margin-top: 330px;
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
`

const ThirdLine = styled.p`
  font-weight: bold;
  font-size: 100px;
  line-height: 150px;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
`

const Player = styled.div`
  margin-top: 40px; 
  display: flex;
  align-items: center;
  .sliderContainer{
    width: 887px;
    margin: 5px 0px 0px 45px;
  }
  p{
    margin-left: 47px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`

const StyledSlider = styled(Slider)`
  .MuiSlider-thumb{
    box-shadow: 0px 0px 0px 0px !important;
    width: 2px;
    height: 20px;
    color: #7A66CC;
  }
  .MuiSlider-track{
    height: 1px;
    color:#7A66CC;
  }
  .MuiSlider-rail{
    height: 2px;
    background-color: white;
    opacity: 1;
  }
`

const News = styled.div`  
  position: relative;
  height: 300px;
  margin-top: 120px;
  display: flex;
  justify-content: space-between;

  #second-cont{
    border-radius: 20px 0px 20px 0px;
    width: 350px;
    height: 90px;
    position: absolute;
    bottom: 0;
    background-color: rgba(122, 102, 204, 0.7);
    p{
      margin: 21px 0 0 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
      opacity: 1 !important;
    }
  }
  
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLine>
        <LogoContainer>
          <img src={Logo} alt="Logo" />
          <img src={LogoName} alt="LogoName" />
        </LogoContainer>
        <Nav>
          <div><a href='#'>About</a></div>
          <div><a href='#'>News</a></div>
          <div><a href='#'>Music</a></div>
          <div><a href='#'>Media</a></div>
          <div><a href='#'>Tours</a></div>
          <div><a href='#'>Contacts</a></div>
        </Nav>
      </HeaderLine>
      <SecondLine>New Single</SecondLine>
      <ThirdLine>War For Love</ThirdLine>
      <Player>
        <img src={PlayIco} alt='PlayIco' />
        <div className='sliderContainer'>
          <StyledSlider />
        </div>
        <p>00:22-02:54</p>
      </Player>
      <News>
        {data.map((box) => {
          return (
            <div>
              <img src={box.image} alt='Picture' />
              <div id="second-cont">
                <p >{box.info1}<br />{box.info2}</p>
              </div>
            </div>
          );
        })}
      </News>
    </StyledHeader>
  );
}

export default Header;
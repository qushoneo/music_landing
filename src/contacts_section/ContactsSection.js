import styled from 'styled-components';
import '../App.css';
import Logo from '../images/Logo.png';
import LogoName from '../images/LogoName.png';
import Apple from '../images/Apple.png';
import Spotify from '../images/Spotify.png';
import Inst from '../images/Inst.png';
import Youtube from '../images/YT.png';
import Twitter from '../images/Twitter.png';
import Facebook from '../images/Facebook.png';

const SixthSection = styled.div`
  margin: 0 auto;
  width: 1110px;
  margin-top: 180px;
`

const StyledFooterHeadline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  #logoName{
    margin-left: 20px;
    margin-top: 10px;
  }
`

const StyledSecondLine = styled.div`
  margin-top: 60px;
  display: flex;
  color: white;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  justify-content: center;
`

const LeftSide = styled.div`
  
  text-align: right;
  font-weight: bold;
`

const RightSide = styled.div`
  margin-left: 30px;
  text-align: left;
  font-weight: normal;
`

const IconsContainer = styled.div`
  width: 534px;
  margin: 60px 0px 0px 280px;
  justify-content: space-around;
  display: flex;
`

const Footer = styled.div`
  margin: 100px 0px 40px 0px;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.5;
`

const ContactSection = () => {
  return (
    <SixthSection>
      <StyledFooterHeadline>
        <img src={Logo} alt='Logo' />
        <img id='logoName' src={LogoName} alt='LogoName' />
      </StyledFooterHeadline>
      <StyledSecondLine>
        <LeftSide>
          <p id='leftSide'>Artist Management:</p>
          <p id='rightSide'>EMAIL:</p>
        </LeftSide>
        <RightSide>
          <p id='leftSide'>Jake Henny</p>
          <p id='rightSide'>jake@brightlightsofficial.com</p>
        </RightSide>
      </StyledSecondLine>
      <IconsContainer>
        <img src={Apple} alt='Apple' />
        <img src={Spotify} alt='Spotify' />
        <img src={Inst} alt='Inst'/>
        <img src={Youtube} alt='Youtube' />
        <img src={Twitter} alt='Twtitter' />
        <img src={Facebook} alt='Facebook' />
      </IconsContainer>
      <Footer>
        <p>© 2020 DJ bright lights.</p>
      </Footer>
    </SixthSection>
  );
}


export default ContactSection;
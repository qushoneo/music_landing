import styled from 'styled-components';
import '../App.css';
import Columns from '../images/musicСolumns.png';
import RightSidePic1 from '../images/RightSidePic1.png';
import RightSidePic2 from '../images/RightSidePic2.png';

const FirstSection = styled.div`
  padding-top: 180px;
  margin: 0 auto;
  width: 1110px;
  display: flex;
`

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  #firstSectionHeader{
    margin-left: 30px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
  }
  .firstSectionParagraph{
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.7;
  }
  .sss{
    margin-top: 60px;
  }
  .textPurpleBoxes{
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    margin-left: 20px;
  }
  .purpleBoxes{
    width: 30px;
    height: 30px;
    background-color: #7A66CC;
    border-radius: 10px 0px;
  }
`

const RightSide = styled.div`
  width: 50%;
  height: 594px;
  color: white;
`

const StyledPurpleBoxesContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

const BrightLightsCont = styled.div`
  display: flex;
  .secondBox{
    margin-left: 40px;
  }
  .fourthBox{
    margin-left: 61px;
  }
`

const StyledRightSidePic1 = styled.img`
  margin: 60px 0px 0px 125px;
  z-index: 1;
`

const StyledRightSidePic2 = styled.img`
  position: relative;
  bottom: 342px;
  left: 220px;
  z-index: -1;
`

const AboutSection = () => {
  return (
    <FirstSection>
        <LeftSide>
          <img src={Columns} alt='Columns'/>
          <p id="firstSectionHeader">Bright Lights</p>
          <div>
            <p class="firstSectionParagraph sss">Bright Lights is a multi-Grammy nominated singer, songwriter, DJ<br/> and record producer. She has written for numerous</p><br/>
            <p class="firstSectionParagraph">pop stars including Britney Spears, Justin Bieber, Usher and<br/>Beyoncé. Her catalog has amassed over 1 billion streams<br/>worldwide. More than 100 million of those streams can be<br/>attributed to her artist career and include such hits as Porter<br/>Robinson's "Language," 3LAU's "How You Love Me" and her own<br/> single "Runaway." She was also a featured vocalist on Zedd's #1 Clarity album. Her latest music video, "Put It Down," reached 1 million streams in the first week, releasing independently. Bright Lights is currently in the studio working on a self-produced album slated for release in 2020. </p>
          </div>
          <StyledPurpleBoxesContainer>
            <BrightLightsCont>
              <div class="purpleBoxes firstBox"></div>
              <p class="textPurpleBoxes firstPar">Based in: Los Angeles</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes secondBox"></div>
              <p class="textPurpleBoxes secondPar">Founded in 2011</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes thirdBox"></div>
              <p class="textPurpleBoxes thirdPar">Genre: #DancePop</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes fourthBox"></div>
              <p class="textPurpleBoxes fourthPar">Label: 333 Recordings</p>
            </BrightLightsCont>
          </StyledPurpleBoxesContainer>
        </LeftSide>
        <RightSide>
            <StyledRightSidePic1 src={RightSidePic1} alt='RightSidePic1'/>
            <StyledRightSidePic2 src={RightSidePic2} alt='RightSidePic2' />
        </RightSide>
      </FirstSection>
  );
}



export default AboutSection;
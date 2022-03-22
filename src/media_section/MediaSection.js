import styled from 'styled-components';
import '../App.css';
import MediaSectionFirstPic from '../images/MediaSectionFirstPic.png';
import MediaSectionSecondPic from '../images/MediaSectionSecondPic.png';
import MediaSectionThirdPic from '../images/MediaSectionThirdPic.png';
import MediaSectionFourthPic from '../images/MediaSectionFourthPic.png';
import MediaSectionFifthPic from '../images/MediaSectionFifthPic.png';


const FourthSection = styled.div`
  margin: 0 auto;
  width: 1110px;
  margin-top: 192px;
  display: flex;
`

const SecondBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  p{
    margin-top: 370px;
    position: absolute;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #7A66CC;
  }
`

const MediaSection = () => {
  return (
    <FourthSection>
        <div>
          <img src={MediaSectionFirstPic} alt='MediaSectionFirstPic' />
        </div>
        <SecondBox>
          <img src={MediaSectionSecondPic} alt='MediaSectionSecondPic' />
          <img src={MediaSectionThirdPic} alt='MediaSectionThirdPic' />
          <img src={MediaSectionFourthPic} alt='MediaSectionFourthPic' />
          <p>EDC Las Vegas Mainstage</p>
        </SecondBox>
        <div>
          <img src={MediaSectionFifthPic} alt='MediaSectionFifthPic' />
        </div>
    </FourthSection>
  );
}

export default MediaSection;
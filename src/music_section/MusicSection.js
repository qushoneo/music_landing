import styled from 'styled-components';
import '../App.css';
import CirclePic from '../images/CirclePic.png';
import Columns from '../images/musicСolumns.png';
import PlayIco from '../images/PlayIco.png';
import Slider from '@mui/material/Slider';
import SpotifyPic from '../images/SpotifyPic.png';
import ITunesPic from '../images/ITunesPic.png';

const ThirdSection = styled.div`
  margin: 0 auto;
  width: 1110px;
  margin-top: 301px;
  display: flex;
`

const LeftSide = styled.div`
  width: 52%;
  margin-top: 48px;
  .firstEllipse{
    position: absolute;
    border-radius: 50%;
    width: 510px;
    height: 510px;
    background: rgba(122, 102, 204, 0.3);
    .secondEllipse{
      position: relative;
      border-radius: 50%;
      width: 472px;
      height: 472px;
      background: rgba(122, 102, 204, 0.6);
      margin-left: 19px;
      margin-top: 19px;
      img{
        margin-left: 19px;
        margin-top: 19px;
      }
  }
}
`

const RightSide = styled.div`
  width: 48%;
`

const MusicSectionHeadline = styled.div`
  display: flex;
  align-items: center;
  p{
    margin-left: 28px;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;  
    color: #FFFFFF;
  }
`

const Player = styled.div`
  margin-top: 74px;
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  p{
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
  }
  
`
const StyledSlider = styled(Slider)`
  margin-left: 45px;
  .MuiSlider-thumb{
    box-shadow: 0px 0px 0px 0px !important;
    width: 2px;
    top: 11px;
    height: 20px;
    color: #7A66CC;
  }
  .MuiSlider-track{
    height: 1px;
    top: 11px;
    color:#7A66CC;
  }
  .MuiSlider-rail{
    top: 11px;
    height: 2px;
    background-color: white;
    opacity: 1;
  }
`

const PlayerLeftSide = styled.div`
  display: flex;
  width: 380px;
  img{
    width: 22px;
    height: 20px;
  }
`

const TrackList = styled.div`
  .trackList{
    margin-top: 20px;
    color: white;
    display: flex;
    .trackNumber{
      font-weight: bold;
      font-size: 14px;
      line-height: 27px;
      opacity: 0.5;
    }
    .track{
      margin-left: 20px;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
    }
  }
`

const MusicFooter = styled.div`
  display: flex;
  margin-top: 50px;
  color: white;
  .bigP{
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }
  .spotifyLink{
    margin-left: 40px;
    display: flex;
    align-items: center;
    p{
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
  }
  .iTunesLink{
    margin-left: 30px;
    display: flex;
    align-items: center;
  }
  p{
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }
`

const MusicSection = () => {

  let data = ["3LAU, Bright Lights — How You Love Me",
    "Bright Lights, Kaleena Zanders, Kandy — War For Love",
    "Pink Is Punk, Benny Benassi, Bright Lights — Ghost",
    "Hardwell, Dyro, Bright Lights — Never Say Goodbye",
    "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now",
    "Zedd, Bright Lights — Follow You Down"];

  return (
    <ThirdSection>
      <LeftSide>
        <div className='firstEllipse'>
          <div className='secondEllipse'>
            <img src={CirclePic} alt='CirclePic' />
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <MusicSectionHeadline>
          <img src={Columns} alt='HeadlinePic' />
          <p>Last tracks</p>
        </MusicSectionHeadline>
        <Player>
          <PlayerLeftSide>
            <img src={PlayIco} alt='PlayIco' />
            <StyledSlider />
          </PlayerLeftSide>
          <p>00:47-03:30</p>
        </Player>
        <TrackList>
          {data.map((track, index) => {
            return (
              <div className='trackList'>
                <p className='trackNumber'>{`0${index + 1}`}</p>
                <p className='track'>{track}</p>
              </div>
            );
          })}
        </TrackList>
        <MusicFooter>
          <p className='bigP'>Follow me:</p>
          <div className='spotifyLink'>
            <img src={SpotifyPic} alt='SpotifyPic' />
            <p>Spotify</p>
          </div>
          <div className='iTunesLink'>
            <img src={ITunesPic} alt='iTunesPic' />
            <p>iTunes</p>
          </div>
        </MusicFooter>
      </RightSide>
    </ThirdSection>
  );
}

export default MusicSection;
import styled from 'styled-components';
import '../App.css';

const StyledCard = styled.div`
    border-radius: 30px 0px;
    background: #2F2B2B;
    font-size: 18px;
    line-height: 27px;
    color: white;
    position: relative;
    
}
.headline{
  margin-left: 25px;
  margin-top: 30px;
  font-weight: bold;
  opacity: 0.5;
}
.location{
  margin-left: 25px;
  margin-top: 20px;
  font-weight: normal;
}
.bottomCard{
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  text-transform: uppercase;
  .date{
    margin-left: 30px;
    opacity: 0.5;
  }
}
.ticketsContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 60px;
  background-color: #7A66CC;
  border-radius: 30px 0px;
}
`

const Card = (props) => {

  return (
    <StyledCard>
      <img src={props.data.image} alt='ToursSectionPic' />
      <p className='headline'>{props.data.headline}</p>
      <p className='location'>{props.data.location}</p>
      <div className='bottomCard'>
        <p className='date'>{props.data.date}</p>
        <div className='ticketsContainer'>
          <p>Tickets</p>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;



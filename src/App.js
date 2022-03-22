import styled from 'styled-components';
import './App.css';
import Header from './header/Header';
import HeaderImage from './images/HeaderImage.png';
import AboutSection from './about_section/AboutSection';
import NewsSection from './news_section/NewsSection';
import MusicSection from './music_section/MusicSection';
import MediaSection from './media_section/MediaSection';
import ToursSection from './tours_section/ToursSection';
import ContactSection from './contacts_section/ContactsSection';

const ImageContainer = styled.div`
  img{  
    z-index: -1;
    position: absolute;
    max-width: 100%;
    min-width: 100%;
}
`

function App() {
  return (
    <div className="App">
      <ImageContainer>
        <img src={HeaderImage} alt="HeaderImg" />
      </ImageContainer>
      <Header/>
      <AboutSection/>
      <NewsSection/>
      <MusicSection/>
      <MediaSection/>
      <ToursSection/>
      <ContactSection/>
    </div>
  );
}

export default App;

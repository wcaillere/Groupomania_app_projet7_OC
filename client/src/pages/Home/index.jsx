import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
import PopupPost from '../../components/PopupPost';
//imports components created with styled-components from style.jsx
import { MainContainer, SeparationBar, ClearDiv } from './style';
import { useState, useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns Home page
function Home() {
  const theme = useContext(ThemeContext).theme;
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <HeaderHome />
      <MainContainer theme={theme}>
        <CreatePost />
        <SeparationBar theme={theme} />
        <Post setTrigger={setButtonPopup} />
        <Post setTrigger={setButtonPopup} />
        <Post setTrigger={setButtonPopup} />
        <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
      </MainContainer>
      <ClearDiv />
      <FooterHome />
    </div>
  );
}

export default Home;

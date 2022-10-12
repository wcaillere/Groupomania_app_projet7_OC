import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
//imports components created with styled-components from style.jsx
import { MainContainer, SeparationBar, ClearDiv } from './style';

//Returns Home page
function Home() {
  return (
    <div>
      <HeaderHome />
      <MainContainer>
        <CreatePost />
        <SeparationBar />
        <Post />
        <Post />
        <Post />
      </MainContainer>
      <ClearDiv />
      <FooterHome />
    </div>
  );
}

export default Home;

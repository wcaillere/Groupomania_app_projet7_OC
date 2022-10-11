import styled from 'styled-components';
import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';

const MainContainer = styled.main`
  background: #e7e7e7;
  padding: 20px 0px;
`;

function Home() {
  return (
    <div>
      <HeaderHome />
      <MainContainer>
        <CreatePost />
        <Post />
        <Post />
      </MainContainer>
      <FooterHome />
    </div>
  );
}

export default Home;

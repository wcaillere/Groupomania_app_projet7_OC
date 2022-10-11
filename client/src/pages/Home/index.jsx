import styled from 'styled-components';
import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
import colors from '../../utils/style/colors';

const MainContainer = styled.main`
  background: #e7e7e7;
  padding: 20px 0px;
`;

const SeparationBar = styled.div`
  border: 1px solid ${colors.primary};
  background: ${colors.primary};
  width: 95%;
  margin: auto;
  max-width: 600px;
`;

//Used to not have a footer fixed hiding end of the page
const ClearDiv = styled.div`
  height: 30px;
`;

function Home() {
  return (
    <div>
      <HeaderHome />
      <MainContainer>
        <CreatePost />
        <SeparationBar />
        <Post />
        <Post />
      </MainContainer>
      <ClearDiv />
      <FooterHome />
    </div>
  );
}

export default Home;

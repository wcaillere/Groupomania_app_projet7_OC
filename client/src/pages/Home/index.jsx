import styled from 'styled-components';
import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';

const MainContainer = styled.main`
  background: #e7e7e7;
`;

function Home() {
  return (
    <div>
      <HeaderHome />
      <MainContainer>test</MainContainer>
      <FooterHome />
    </div>
  );
}

export default Home;

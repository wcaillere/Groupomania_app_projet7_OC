import styled from 'styled-components';
import HeaderHome from '../../components/HeaderHome';

const MainContainer = styled.main`
  background: #e7e7e7;
`;

function Home() {
  return (
    <div>
      <HeaderHome />
      <MainContainer>test</MainContainer>
    </div>
  );
}

export default Home;

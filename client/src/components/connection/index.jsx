import styled from 'styled-components';
import colors from '../../utils/style/colors';
import login_img from '../../assets/login_img.jpg';

const ConnectionContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 75px auto;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
`;

const ConnectionLeft = styled.div`
  width: 50%;
`;

const ConnectionRight = styled.div`
  width: 50%;
  background: ${colors.secondary};
`;

const LoginImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  opacity: 60%;
`;

function Connection() {
  return (
    <ConnectionContainer>
      <ConnectionLeft>
        <LoginImg src={login_img} alt="login" />
      </ConnectionLeft>
      <ConnectionRight></ConnectionRight>
    </ConnectionContainer>
  );
}

export default Connection;

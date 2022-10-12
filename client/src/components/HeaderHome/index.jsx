import Logo from '../../assets/logo_white.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

const HeaderLogo = styled.img`
  height: 30px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 15px;
  background: ${colors.Tertiary};
`;

const Deconnectionbutton = styled(Link)`
  text-decoration: none;
`;

const DeconnectionText = styled.span`
  display: none;
  margin-left: 10px;
  color: white;
  @media (min-width: 768px) {
    display: inline;
  }
`;

function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo Groupomania" />
      <Deconnectionbutton to="/">
        <i
          className="fa-solid fa-power-off fa-lg"
          style={{
            color: 'white',
          }}
        ></i>
        <DeconnectionText>Déconnexion</DeconnectionText>
      </Deconnectionbutton>
    </HeaderContainer>
  );
}

export default HeaderHome;

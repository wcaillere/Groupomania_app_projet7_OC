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
      <Link to="/" style={{ textDecoration: 'none' }}>
        <i
          class="fa-solid fa-power-off fa-lg"
          style={{
            color: 'white',
          }}
        ></i>
        <DeconnectionText>Déconnexion</DeconnectionText>
      </Link>
    </HeaderContainer>
  );
}

export default HeaderHome;

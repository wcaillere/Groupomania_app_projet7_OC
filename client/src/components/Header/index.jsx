import Logo from '../../assets/logo_grey.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderLogo = styled.img`
  height: 30px;
  margin: 10px 0px;
  @media (min-width: 993px) {
    height: 40px;
    margin: 10px 20px;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding-top: 10px;
  background: white;
  @media (min-width: 993px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  @media (min-width: 993px) {
    width: 300px;
  }
`;

const NavItem = styled(Link)`
  color: ${colors.Tertiary};
  margin: auto;
  padding: 15px 0px;
  text-decoration: none;
  width: 50%;
  border-bottom: 5px solid
    ${(props) => (props.border === true ? colors.Tertiary : 'white')};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} />
      <NavContainer>
        <NavItem to="/" border={window.location.href.endsWith('/')}>
          Se connecter
        </NavItem>
        <NavItem to="/signup" border={window.location.href.endsWith('/signup')}>
          S'inscrire
        </NavItem>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

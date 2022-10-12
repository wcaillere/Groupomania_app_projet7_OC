import Logo from '../../assets/logo_grey.svg';
//imports components created with styled-components from style.jsx
import { HeaderLogo, HeaderContainer, NavContainer, NavItem } from './style';

//Returns the Header for the Login and Signup pages
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

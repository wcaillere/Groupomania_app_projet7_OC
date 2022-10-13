import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';
import Logogrey from '../../assets/logo_grey.svg';
import LogoWhite from '../../assets/logo_white.svg';
//imports components created with styled-components from style.jsx
import { HeaderLogo, HeaderContainer, NavContainer, NavItem } from './style';

//Returns the Header for the Login and Signup pages
function Header() {
  const theme = useContext(ThemeContext).theme;
  return (
    <HeaderContainer theme={theme}>
      <HeaderLogo src={theme === 'dark' ? LogoWhite : Logogrey} />
      <NavContainer>
        <NavItem
          to="/"
          border={window.location.href.endsWith('/')}
          theme={theme}
        >
          Se connecter
        </NavItem>
        <NavItem
          to="/signup"
          border={window.location.href.endsWith('/signup')}
          theme={theme}
        >
          S'inscrire
        </NavItem>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

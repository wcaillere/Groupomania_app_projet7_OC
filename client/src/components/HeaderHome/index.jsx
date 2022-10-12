import Logo from '../../assets/logo_white.svg';
//imports components created with styled-components from style.jsx
import {
  Deconnectionbutton,
  DeconnectionText,
  HeaderContainer,
  HeaderLogo,
} from './style';

//Returns Header for the homePage
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

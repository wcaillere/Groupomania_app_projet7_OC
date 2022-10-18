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
  function deconnection() {
    if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  }
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo Groupomania" />
      <Deconnectionbutton
        onClick={() => {
          deconnection();
        }}
      >
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

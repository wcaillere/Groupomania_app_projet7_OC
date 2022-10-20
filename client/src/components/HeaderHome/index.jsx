import Logo from '../../assets/logo_white.svg';
import { Link } from 'react-router-dom';
//imports components created with styled-components from style.jsx
import './headerHome.css';

//Returns Header for the homePage
function HeaderHome() {
  function deconnection() {
    if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  }
  return (
    <header className="headerHomeContainer">
      <img src={Logo} alt="Logo Groupomania" className="headerHomeLogo" />
      <Link
        className="headerHomeDeconnectionButton"
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
        <span className="headerHomeDeconnectionText">Déconnexion</span>
      </Link>
    </header>
  );
}

export default HeaderHome;

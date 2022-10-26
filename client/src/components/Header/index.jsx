import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/context/index';
import Logogrey from '../../assets/logo_grey.svg';
import LogoWhite from '../../assets/logo_white.svg';
import './header.css';

/**
 * Returns the Header for the Login and Signup pages
 * @returns {React.ReactElement}
 */
function Header() {
  const theme = useContext(ThemeContext).theme;
  return (
    <header
      className={
        'headerContainer ' + (theme === 'dark' ? 'headerContainerDark' : '')
      }
    >
      <img
        src={theme === 'dark' ? LogoWhite : Logogrey}
        className="headerLogo"
        alt="logo Groupomania"
      />
      <nav className="navContainer">
        <Link
          to="/"
          className="navItem"
          //Depending on the page where the user is, border of a nav item is not the same
          style={{
            borderBottom: `5px solid ${
              window.location.href.endsWith('/') === true
                ? theme === 'dark'
                  ? 'white'
                  : `${getComputedStyle(document.body).getPropertyValue(
                      '--Tertiary'
                    )}`
                : theme === 'dark'
                ? `${getComputedStyle(document.body).getPropertyValue(
                    '--Tertiary'
                  )}`
                : 'white'
            }`,
            color:
              theme === 'dark'
                ? 'white'
                : `${getComputedStyle(document.body).getPropertyValue(
                    '--Tertiary'
                  )}`,
          }}
        >
          Se connecter
        </Link>
        <Link
          to="/signup"
          className="navItem"
          style={{
            borderBottom: `5px solid ${
              window.location.href.endsWith('/signup') === true
                ? theme === 'dark'
                  ? 'white'
                  : `${getComputedStyle(document.body).getPropertyValue(
                      '--Tertiary'
                    )}`
                : theme === 'dark'
                ? `${getComputedStyle(document.body).getPropertyValue(
                    '--Tertiary'
                  )}`
                : 'white'
            }`,
            color:
              theme === 'dark'
                ? 'white'
                : `${getComputedStyle(document.body).getPropertyValue(
                    '--Tertiary'
                  )}`,
          }}
        >
          S'inscrire
        </Link>
      </nav>
    </header>
  );
}

export default Header;

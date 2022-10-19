//imports components created with styled-components from style.jsx
import './footer.css';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//returns the Footer for the Login and Signup pages
function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <footer className="footerContainer">
      <button
        onClick={() => toggleTheme()}
        className={
          theme === 'dark' ? 'footerButton footerButtonDark' : 'footerButton'
        }
      >
        {theme === 'dark' ? (
          <i className="fa-solid fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </button>
      <span
        className={
          theme === 'dark' ? 'footerText footerTextDark' : 'footerText'
        }
      >
        {' '}
        @Groupomania, 2022
      </span>
    </footer>
  );
}

export default Footer;

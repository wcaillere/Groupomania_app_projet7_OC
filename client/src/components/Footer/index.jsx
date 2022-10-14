//imports components created with styled-components from style.jsx
import { FooterContainer, Footerbutton, FooterText } from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//returns the Footer for the Login and Signup pages
function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <Footerbutton onClick={() => toggleTheme()} theme={theme}>
        {theme === 'dark' ? (
          <i className="fa-solid fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </Footerbutton>
      <FooterText theme={theme}> @Groupomania, 2022</FooterText>
    </FooterContainer>
  );
}

export default Footer;

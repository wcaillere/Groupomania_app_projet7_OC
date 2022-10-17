//imports components created with styled-components from style.jsx
import { Footer, Footerbutton, FooterText } from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns the Footer for the homePage
function FooterHome() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <Footer>
      <Footerbutton onClick={() => toggleTheme()}>
        {theme === 'dark' ? (
          <i className="fa-solid fa-sun fa-xl"></i>
        ) : (
          <i className="fa-solid fa-moon fa-xl"></i>
        )}
      </Footerbutton>
      <FooterText>@Groupomania, 2022</FooterText>
      <Footerbutton>
        <i className="fa-solid fa-chevron-up fa-xl"></i>
      </Footerbutton>
    </Footer>
  );
}

export default FooterHome;

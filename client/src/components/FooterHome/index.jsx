//imports components created with styled-components from style.jsx
import { Footer, Footerbutton, FooterText } from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns the Footer for the homePage
function FooterHome() {
  const toggleTheme = useContext(ThemeContext).toggleTheme;

  return (
    <Footer>
      <Footerbutton onClick={() => toggleTheme()}>
        <i className="fa-solid fa-sun fa-lg"></i>
      </Footerbutton>
      <FooterText>@Groupomania, 2022</FooterText>
      <Footerbutton>
        <i className="fa-solid fa-chevron-up fa-xl"></i>
      </Footerbutton>
    </Footer>
  );
}

export default FooterHome;

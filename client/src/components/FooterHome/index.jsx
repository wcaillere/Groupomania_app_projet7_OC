//imports components created with styled-components from style.jsx
import { Footer, Footerbutton, FooterText } from './style';

//Returns the Footer for the homePage
function FooterHome() {
  return (
    <Footer>
      <Footerbutton>
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

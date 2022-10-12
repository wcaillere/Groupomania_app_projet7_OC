//imports components created with styled-components from style.jsx
import { FooterContainer, Footerbutton, FooterText } from './style';

//returns the Footer for the Login and Signup pages
function Footer() {
  return (
    <FooterContainer>
      <Footerbutton>
        <i className="fa-solid fa-sun fa-xl"></i>
      </Footerbutton>
      <FooterText> @Groupomania, 2022</FooterText>
    </FooterContainer>
  );
}

export default Footer;

import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  color: white;
  background: ${colors.Tertiary};
  text-align: center;
`;

const Footerbutton = styled.button`
  background: ${colors.Tertiary};
  border: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const FooterText = styled.span`
  margin: 0px 30px;
`;

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

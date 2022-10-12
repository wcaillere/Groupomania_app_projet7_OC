import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  color: ${colors.Tertiary};
  text-align: center;
`;

const Footerbutton = styled.button`
  background: white;
  border: none;
  color: ${colors.Tertiary};
  :hover {
    cursor: pointer;
  }
`;

const FooterText = styled.span`
  margin: 0px 30px;
`;

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

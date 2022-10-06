import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  color: ${colors.Tertiary};
  text-align: center;
`;

function Footer() {
  return <FooterContainer>@Groupomania, 2022</FooterContainer>;
}

export default Footer;

import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  color: white;
  background: ${colors.Tertiary};
  text-align: center;
`;

function FooterHome() {
  return <Footer>@Groupomania, 2022</Footer>;
}

export default FooterHome;

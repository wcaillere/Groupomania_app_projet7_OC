import styled from 'styled-components';
import colors from '../../utils/style/colors';

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: ${colors.Tertiary};
  text-align: center;
`;

function Footer() {
  return <FooterContainer>@Groupomania, 2022</FooterContainer>;
}

export default Footer;

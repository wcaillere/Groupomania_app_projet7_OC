import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  text-align: center;
`;

export const Footerbutton = styled.button`
  background: ${(props) =>
    props.theme === 'dark' ? colors.darkTheme : 'white'};
  border: none;
  color: ${(props) => (props.theme === 'dark' ? 'white' : colors.Tertiary)};
  :hover {
    cursor: pointer;
  }
`;

export const FooterText = styled.span`
  margin: 0px 30px;
  color: ${(props) => (props.theme === 'dark' ? 'white' : colors.Tertiary)};
`;

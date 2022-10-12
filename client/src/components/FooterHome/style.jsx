import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  color: white;
  background: ${colors.Tertiary};
  text-align: center;
`;

export const Footerbutton = styled.button`
  background: ${colors.Tertiary};
  border: none;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

export const FooterText = styled.span`
  margin: 0px 30px;
`;

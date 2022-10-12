import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  color: ${colors.Tertiary};
  text-align: center;
`;

export const Footerbutton = styled.button`
  background: white;
  border: none;
  color: ${colors.Tertiary};
  :hover {
    cursor: pointer;
  }
`;

export const FooterText = styled.span`
  margin: 0px 30px;
`;

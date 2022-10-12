import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

export const HeaderLogo = styled.img`
  height: 30px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 15px;
  background: ${colors.Tertiary};
`;

export const Deconnectionbutton = styled(Link)`
  text-decoration: none;
`;

export const DeconnectionText = styled.span`
  display: none;
  margin-left: 10px;
  color: white;
  @media (min-width: 768px) {
    display: inline;
  }
`;

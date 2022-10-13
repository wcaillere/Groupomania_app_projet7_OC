import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const HeaderLogo = styled.img`
  height: 30px;
  margin: 10px 0px;
  @media (min-width: 993px) {
    height: 40px;
    margin: 10px 20px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding-top: 10px;
  background: ${(props) =>
    props.theme === 'dark' ? colors.Tertiary : 'white'};
  @media (min-width: 993px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  @media (min-width: 993px) {
    width: 300px;
  }
`;

export const NavItem = styled(Link)`
  color: ${(props) => (props.theme === 'dark' ? 'white' : colors.Tertiary)};
  margin: auto;
  padding: 15px 0px;
  text-decoration: none;
  width: 50%;
  border-bottom: 5px solid
    ${(props) =>
      props.border === true
        ? props.theme === 'dark'
          ? 'white'
          : colors.Tertiary
        : props.theme === 'dark'
        ? colors.Tertiary
        : 'white'};
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s all;
  :hover {
    border-bottom: 5px solid
      ${(props) =>
        props.border === false
          ? props.theme === 'dark'
            ? '#b6bce3'
            : 'rgba(67, 73, 112, 0.5)'
          : (props.theme = 'dark' ? 'white' : colors.Tertiary)};
  }
`;

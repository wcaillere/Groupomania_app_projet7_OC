import Logo from '../../assets/logo_white.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderLogo = styled.img`
  height: 30px;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 15px;
  background: ${colors.Tertiary};
`;

function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo Groupomania" />
      <i
        class="fa-solid fa-power-off fa-lg"
        style={{
          color: 'white',
        }}
      ></i>
    </HeaderContainer>
  );
}

export default HeaderHome;

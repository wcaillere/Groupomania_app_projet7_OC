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
  padding: 10px 20px 10px 10px;
  background: ${colors.Tertiary};
`;

function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} alt="Logo Groupomania" />
      <i
        class="fa-solid fa-power-off"
        style={{
          color: 'white',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
        }}
      ></i>
    </HeaderContainer>
  );
}

export default HeaderHome;

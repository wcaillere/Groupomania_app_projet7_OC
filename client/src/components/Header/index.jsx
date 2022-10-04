import Logo from '../../assets/logo_grey.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HeaderLogo = styled.img`
    height: 40px;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: ${colors.Tertiary};
`


function Header() {
    return (
        <NavContainer>
            <HeaderLogo src= { Logo } />
            <div>
                <span>Se connecter</span>
                <span>S'inscrire</span>
            </div>
        </NavContainer>
    )
}

export default Header;
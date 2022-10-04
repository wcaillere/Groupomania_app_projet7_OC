import Logo from '../../assets/logo_grey.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const HeaderLogo = styled.img`
    height: 40px;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px 20px 20px;
`

const NavItem = styled(Link)`
    color: ${colors.Tertiary};
    text-decoration: none;
    padding-right: 30px;
    font-weight: bold;
`


function Header() {
    return (
        <NavContainer>
            <HeaderLogo src= { Logo } />
            <div>
                <NavItem to="/login">Se connecter</NavItem>
                <NavItem to="/signup">S'inscrire</NavItem>
            </div>
        </NavContainer>
    )
}

export default Header;
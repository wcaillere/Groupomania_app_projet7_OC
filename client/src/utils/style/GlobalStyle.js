import { createGlobalStyle } from 'styled-components'


const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle
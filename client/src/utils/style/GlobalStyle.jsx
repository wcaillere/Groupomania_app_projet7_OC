import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Lato', Helvetica, sans-serif;
      box-sizing: border-box;
    }
    body {
        margin: 0px;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;

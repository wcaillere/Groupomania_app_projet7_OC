import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/index';
import colors from './colors';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Lato', Helvetica, sans-serif;
      box-sizing: border-box;
    }
    body {
        margin: 0px;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? colors.darkTheme : 'white'};
    }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 1rem;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #fafafa;
  }
`;

export default GlobalStyle;

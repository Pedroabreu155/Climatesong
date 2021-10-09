import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
  body{
    background-color: #1a181b;
    color: #3E8989;
    -webkit-font-font-smoothing: antialiased;
  }
  body, input, textarea, button{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600
  }
  button{
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

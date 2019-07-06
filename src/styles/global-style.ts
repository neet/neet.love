import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { theme } from './variables';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i&display=swap');

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: ${theme.bg.light};
    color: ${theme.fg.default};
    font-family: Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
    text-rendering: optimizelegibility;
    font-feature-settings: "kern";
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    line-height: 2;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 2;
  }

  h3 {
    font-size: 21px;
    font-weight: 500;
    line-height: 2;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 2;
  }

  a {
    color: ${theme.hl.default};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

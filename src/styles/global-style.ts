import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i&display=swap');

  :root {
    --bg-default-color: rgb(255,255,255);
    --bg-wash-color: rgb(249,249,249);
    --bg-dark-color: rgb(186,186,186);
    --border-default-color: rgb(234,234,234);
    --fg-default-color: rgb(59,59,59);
    --fg-wash-color: rgb(122,122,122);
    --fg-light-color: rgb(153,153,153);
    --fg-reverse-color: rgb(255,255,255);
    --hl-default-color: rgb(0,118,255);
    --shadow-bg-color: rgba(0,0,0,16%);
    --shadow-hl-color: rgba(0,118,255,16%);
  }

  body {
    width: 100%;
    height: 100%;
    background-color: var(--bg-default-color);
    color: var(--fg-default-color);
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
    color: var(--hl-default-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

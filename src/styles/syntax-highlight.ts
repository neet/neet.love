import { css } from 'styled-components';

export const syntaxHighlight = css`
  /* We swap the value of base0X for baseX when dark theme is enabled */
  :root {
    --solarized-base03: #002b36;
    --solarized-base02: #073642;
    --solarized-base01: #586e75;
    --solarized-base00: #657b83;
    --solarized-base0: #839496;
    --solarized-base1: #93a1a1;
    --solarized-base2: #eee8d5;
    --solarized-base3: #fdf6e3;
    --solarized-yellow: #b58900;
    --solarized-orange: #cb4b16;
    --solarized-red: #dc322f;
    --solarized-magenta: #d33682;
    --solarized-violet: #6c71c4;
    --solarized-blue: #268bd2;
    --solarized-cyan: #2aa198;
    --solarized-green: #859900;
  }

  /* stylelint-disable */
  code[class*='language-'],
  pre[class*='language-'] {
    color: var(--solarized-base00);
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;

    @media (prefers-color-scheme: dark) {
      color: var(--solarized-base0);
    }
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background-color: var(--solarized-base02);

    @media (prefers-color-scheme: dark) {
      background-color: var(--solarized-base2);
    }
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background-color: var(--solarized-base02);

    @media (prefers-color-scheme: dark) {
      background-color: var(--solarized-base2);
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background-color: var(--solarized-base3);

    @media (prefers-color-scheme: dark) {
      background-color: var(--solarized-base03);
    }
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--solarized-base1);

    @media (prefers-color-scheme: dark) {
      color: var(--solarized-base01);
    }
  }

  .token.punctuation {
    color: var(--solarized-base01);

    @media (prefers-color-scheme: dark) {
      color: var(--solarized-base1);
    }
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--solarized-blue);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: var(--solarized-cyan);
  }

  .token.entity {
    color: var(--solarized-base00);
    background-color: var(--solarized-base2);

    @media (prefers-color-scheme: dark) {
      color: var(--solarized-base0);
      background-color: var(--solarized-base02);
    }
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--solarized-green);
  }

  .token.function,
  .token.class-name {
    color: var(--solarized-yellow);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--solarized-orange);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`;

import { createGlobalStyle } from 'styled-components'

import colors from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: var(--color-background);
  }

  body,
  h1,
  input,
  button,
  textarea {
    font: 600 18px 'Nunito', sans-serif;
  }

  :root {
    --color-background: #EBF2F5;
  }
`

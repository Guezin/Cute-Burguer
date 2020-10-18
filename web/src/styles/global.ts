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
    --color-landingPage: linear-gradient(107.97deg, #9C3F3A 0%, #B32728 100%);
    --color-buttonPrimary: #FF6400;
    --color-textButtonPrimary: #FFF;
    --color-buttonPrimaryHover: #B32728;
    --color-textButtonPrimaryHover: #6C1212;
    --color-buttonSecondary: #FFD312;
    --color-buttonSecondaryHover: #F23132;
  }
`

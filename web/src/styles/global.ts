import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    background-color: var(--color-background);
  }

  body,
  input,
  button,
  textarea {
    font: 600 18px 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
    outline-style: none;
  }

  :root {
    --color-background: #EBF2F5;
    --color-landingPage: linear-gradient(107.97deg, #9C3F3A 0%, #B32728 100%);
    --color-buttonPrimary: #FF6400;
    --color-textButtonPrimary: #FFF;
    --color-buttonPrimaryHover: #F23132;
    --color-textButtonPrimaryHover: #A32121;
    --color-buttonSecondary: #FFD312;
    --color-textButtonSecondary: #8D774B;
    --color-buttonSecondaryHover: #F23132;
    --color-textButtonSecondaryHover: #A32121;
    --color-textSecondary: #FFF;
  }
`

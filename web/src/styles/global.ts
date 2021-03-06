import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
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
    --color-donePage: #F56D22;
    --color-signInPage: linear-gradient(107.97deg, #9C3F3A 0%, #B32728 100%);
    --color-buttonPrimary: #FF6400;
    --color-textButtonPrimary: #FFF;
    --color-buttonPrimaryHover: #F23132;
    --color-buttonPrimaryHoverSecondary: #E5681F;
    --color-textButtonPrimaryHover: #A32121;
    --color-buttonSecondary: #FFD312;
    --color-textButtonSecondary: #8D774B;
    --color-buttonSecondaryHover: #F23132;
    --color-textButtonSecondaryHover: #A32121;
    --color-buttonTertiary: #B32728;
    --color-buttonTertiaryHover: #F23132;
    --color-buttonQuarterly: #D6601D;
    --color-textButtonQuarterly: #FFF;
    --color-buttonQuarterlyHover: #E5681F;
    --color-textSecondary: #FFF;
    --color-background-aside: linear-gradient(329.54deg, #B32728 0%, #9C3F3A 100%);
    --color-background-sidebar: #9C3F3A;
    --color-textPrimary: #5C8599;
    --color-titlePrimary: #4d6f80;
    --color-hr: #D3E2E5;
    --color-buttonWhatsapp: #FF6400;
    --color-textButtonWhatsapp: #FFF;
    --color-buttonWhatsappHover: #E5681F;
    --color-linkGoogleMaps: #0089a5;
    --color-background-openingHours: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
    --color-textOpeningHours: #5c8599;
    --color-background-openOnWeekends: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    --color-textOpenOnWeekends: #37c77f;
    --color-background-dontOpenOnWeekends: linear-gradient(154.16deg, #fdf0f5 7.85%, #ffffff 91.03%);
    --color-textDontOpenOnWeekends: #ff669f;
    --color-background-form: #FFF;
    --color-border-form: #d3e2e5;
    --color-text-label: #8FA7B2;
    --color-background-input: #f5f8fa;
    --color-buttonGoBack: #EBF2F5;
    --color-buttonEdit: #EBF2F5;
    --color-buttonDelete: #EBF2F5;

  }
`

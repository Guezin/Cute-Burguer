import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { darken } from 'polished'

interface IRememberMeCheckBoxProps {
  remember: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-signInPage);

  main {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  img {
    transform: scale(1.4);
  }

  div {
    margin-top: 212px;

    display: flex;
    flex-direction: column;
    align-items: center;

    strong,
    span {
      color: var(--color-textSecondary);
      font-size: 24px;
    }

    strong {
      font-weight: 800;
    }
  }
`

export const Content = styled.div`
  width: 520px;
  height: 100%;
  background: #fff;

  fieldset {
    margin-top: 154px;
    padding: 54px;
    border: 0;

    legend {
      font-size: 32px;
      font-weight: 700;
      color: var(--color-titlePrimary);
    }

    form button[type='submit'] {
      width: 100%;
      height: 64px;
      margin: 16px auto 0;
      border: 0;
      border-radius: 20px;
      background: var(--color-buttonPrimary);
      color: var(--color-textButtonPrimary);
      font-weight: 700;
      transition: background 0.2s;

      &:hover {
        background: var(--color-buttonPrimaryHoverSecondary);
      }
    }
  }
`
export const GoBack = styled(Link)`
  position: absolute;
  top: 32px;
  right: 32px;
  padding: 6px 12px;
  border-radius: 12px;
  background: var(--color-buttonGoBack);
  transition: background 0.2s;

  svg {
    margin-top: 6px;
  }

  &:hover {
    background: ${darken(0.04, '#EBF2F5')};
  }
`

export const Section = styled.section`
  padding: 32px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RememberMeContainer = styled.div`
  color: var(--color-textPrimary);

  display: flex;
  align-items: center;
`

export const RememberMeCheckBox = styled.div<IRememberMeCheckBoxProps>`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid
    ${({ remember }) =>
      remember
        ? css`var(--color-buttonPrimary)`
        : css`var(--color-border-form);`};

  background: ${({ remember }) =>
    remember
      ? css`var(--color-buttonPrimary)`
      : css`var(--color-background-input)`};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ForgotPassword = styled(Link)`
  color: var(--color-textPrimary);
`

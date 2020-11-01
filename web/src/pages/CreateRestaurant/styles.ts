import styled from 'styled-components'

interface IButtonSelectContainerProps {
  activeButton: number
}

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;

    form {
      width: 700px;
      padding: 64px 80px;
      margin: 64px auto;
      background: var(--color-background-form);
      border: 1px solid var(--color-border-form);
      border-radius: 20px;
      overflow: hidden;

      fieldset {
        border: 0;

        legend {
          width: 100%;
          font-size: 32px;
          line-height: 34px;
          color: var(--color-textPrimary);
          font-weight: 700;
          border-bottom: 1px solid var(--color-background-form);
          margin-bottom: 40px;
          padding-bottom: 24px;
        }
      }

      fieldset + fieldset {
        margin-top: 80px;
      }

      .leaflet-container {
        margin-bottom: 40px;
        border: 1px solid var(--color-border-form);
        border-radius: 20px;
      }

      button[type='submit'] {
        width: 100%;
        height: 64px;
        margin-top: 64px;
        border: 0;
        background: var(--color-buttonPrimary);
        border-radius: 20px;
        color: var(--color-textButtonPrimary);
        font-weight: 800;
        transition: background 0.2s;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background: var(--color-buttonPrimaryHoverSecondary);
        }
      }
    }
  }
`

export const InputBlock = styled.div`
  & + div {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: var(--color-text-label);
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: var(--color-text-label);
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input,
  textarea {
    width: 100%;
    background: var(--color-background-input);
    border: 1px solid var(--color-border-form);
    border-radius: 20px;
    outline: none;
    color: var(--color-textPrimary);
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  label {
    height: 96px;
    background: var(--color-background-input);
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type='file'] {
    display: none;
  }
`

export const ButtonSelectContainer = styled.div<IButtonSelectContainerProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  button {
    height: 64px;
    background: var(--color-background-input);
    border: 1px solid var(--color-border-form);
    color: var(--color-textOpeningHours);
  }

  button:first-child {
    border-radius: 20px 0 0 20px;
  }

  button:last-child {
    border-radius: 0 20px 20px 0;
    border-left: 0;
  }

  button:nth-of-type(${props => props.activeButton}) {
    background: #ffebe0;
    border: 1px solid #ffaa7a;
    color: #ff7223;
  }
`

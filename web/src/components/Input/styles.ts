import styled from 'styled-components'

export const Container = styled.div`
  & + div {
    margin-top: 24px;
  }

  label {
    display: flex;
    color: var(--color-text-label);
    margin-bottom: 8px;
    line-height: 24px;
  }

  input {
    width: 100%;
    height: 64px;
    padding: 0 16px;
    background: var(--color-background-input);
    border: 1px solid var(--color-border-form);
    border-radius: 20px;
    outline: none;
    color: var(--color-textPrimary);
  }
`

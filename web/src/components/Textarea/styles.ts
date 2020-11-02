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

    span {
      font-size: 14px;
      color: var(--color-text-label);
      margin-left: 24px;
      line-height: 24px;
    }
  }

  textarea {
    width: 100%;
    min-height: 120px;
    max-height: 240px;
    padding: 16px;
    background: var(--color-background-input);
    border: 1px solid var(--color-border-form);
    border-radius: 20px;
    outline: none;
    color: var(--color-textPrimary);
    resize: vertical;
    line-height: 28px;
  }
`

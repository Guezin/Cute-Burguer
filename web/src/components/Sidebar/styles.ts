import styled from 'styled-components'

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: var(--color-background-sidebar);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 82px;
    height: 70px;
  }

  footer {
    button {
      width: 48px;
      height: 48px;
      border: 0;
      background: var(--color-buttonTertiary);
      border-radius: 16px;
      transition: background 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: var(--color-buttonTertiaryHover);
      }
    }
  }
`

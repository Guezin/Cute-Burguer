import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface INavigateProps {
  activate: number
}

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

  main {
    display: flex;
    flex-direction: column;
  }
`
export const Navigate = styled(Link)<INavigateProps>`
  padding: 12px;
  border-radius: 16px;

  display: flex;

  &:first-child {
    margin-bottom: 16px;
    background: ${({ activate }) =>
      !!activate
        ? css`var(--color-buttonSecondary)`
        : css`var(--color-buttonTertiary)`};

    svg {
      color: ${({ activate }) => (!!activate ? '#a32121' : '#FFF')};
    }
  }

  &:last-child {
    background: ${({ activate }) =>
      !!activate
        ? css`var(--color-buttonSecondary)`
        : css`var(--color-buttonTertiary)`};

    svg {
      color: ${({ activate }) => (!!activate ? '#a32121' : '#FFF')};
    }
  }
`
export const Notification = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid var(--color-buttonTertiary);
  border-radius: 50%;
  background: var(--color-buttonSecondary);
  position: absolute;
  right: 53px;
`
export const LogoutButton = styled(Link)`
  padding: 12px;
  border-radius: 16px;
  background: var(--color-buttonTertiary);
  transition: background 0.2s;

  display: flex;

  &:hover {
    background: var(--color-buttonTertiaryHover);
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-landingPage);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 1100px;
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    height: 184px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      img {
        width: 180px;
        height: 152px;
      }
    }

    button {
      width: 222px;
      height: 56px;
      border: 0;
      background: var(--color-buttonPrimary);
      color: var(--color-textButtonPrimary);
      border-radius: 20px;
      transition: background 0.2s;

      &:hover {
        background: var(--color-buttonPrimaryHover);
        color: var(--color-textButtonPrimaryHover);
      }
    }
  }

  main {
    height: calc(100% - 184px);

    display: flex;
    align-items: flex-start;
    justify-content: center;

    img {
      width: 626px;
      height: 429px;
      transform: rotate(7.12deg);
    }

    button {
      width: 80px;
      height: 80px;
      margin-top: 440px;
      border: 0;
      border-radius: 20px;
      background: var(--color-buttonSecondary);
      transition: background 0.2s;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: var(--color-textButtonSecondary);
      }

      &:hover {
        background: var(--color-buttonSecondaryHover);

        svg {
          color: var(--color-textButtonSecondaryHover);
        }
      }
    }
  }
`

export const Location = styled.div`
  margin-left: 64px;
  color: var(--color-textSecondary);

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
  }
`

export const TitleContainer = styled.div`
  width: 396px;
  margin-top: 154px;

  h1 {
    font-size: 81px;
    font-weight: 800;
    line-height: 70px;
    color: var(--color-textSecondary);
  }

  p {
    margin-top: 32px;
    color: var(--color-textSecondary);
  }
`

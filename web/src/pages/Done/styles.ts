import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--color-donePage);

  display: flex;
  justify-content: center;

  main {
    width: 1100px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

export const Content = styled.div`
  width: 392px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    color: var(--color-textSecondary);
  }

  h1 {
    font-size: 81px;
    font-weight: 800;
  }

  p {
    padding: 16px;
    font-size: 20px;
    line-height: 34px;
  }

  button {
    width: 243px;
    height: 64px;
    margin-top: 32px;
    border: 0;
    border-radius: 20px;
    background: var(--color-buttonQuarterly);
    color: var(--color-textButtonQuarterly);
    font-weight: 700;
    transition: background 0.2s;

    &:hover {
      background: var(--color-buttonQuarterlyHover);
    }
  }
`

export const ImageContainer = styled.div`
  width: 420.29px;
  height: 490px;
  transform: rotate(3.7deg);
`

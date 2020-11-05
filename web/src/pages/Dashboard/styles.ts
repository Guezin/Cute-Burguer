import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  width: calc(100% - 132px);
  padding: 64px 64px;
  position: relative;
  left: 132px;

  header {
    padding-bottom: 32px;
    border-bottom: 1px solid var(--color-hr);

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
      font-weight: 700;
      color: var(--color-titlePrimary);
    }

    span {
      font-size: 16px;
      font-weight: 600;
      color: var(--color-textPrimary);
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
  }
`

export const FooterLeafletMap = styled.div`
  padding: 8px 32px;
  height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--color-titlePrimary);
  }
`
export const ButtonContainer = styled.div`
  display: flex;
`

export const EditButton = styled(Link)`
  padding: 8px 10px;
  margin-right: 8px;
  border-radius: 8px;
  background: var(--color-buttonEdit);

  display: flex;
`

export const DeleteButton = styled(Link)`
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--color-buttonEdit);

  display: flex;
`

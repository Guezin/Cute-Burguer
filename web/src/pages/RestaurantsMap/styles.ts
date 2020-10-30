import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;

  aside {
    width: 440px;
    padding: 80px;
    background: var(--color-background-aside);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      color: var(--color-textSecondary);

      h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
      }

      p {
        line-height: 28px;
        margin-top: 24px;
      }
    }

    footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      color: var(--color-textSecondary);

      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 1;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: #6c1212;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: var(--color-buttonTertiary);
    border-radius: 12px;
    transition: background 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: var(--color-buttonTertiaryHover);
    }
  }
`
export const CreateRestaurantButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 10;

  width: 64px;
  height: 64px;
  background: var(--color-buttonTertiary);
  border: 0;
  border-radius: 20px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-buttonTertiaryHover);
  }
`

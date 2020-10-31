import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }
`

export const RestaurantDatails = styled.div`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  overflow: hidden;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`

export const RestaurantImages = styled.div`
  margin: 16px 40px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  button {
    border: 0;
    height: 88px;
    background: none;
    border-radius: 20px;
    overflow: hidden;
    outline: none;

    img {
      width: 100%;
      height: 88px;
      object-fit: cover;
    }
  }
`

export const Content = styled.div`
  padding: 80px;

  h1,
  h2 {
    color: var(--color-titlePrimary);
  }

  h1 {
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 36px;
    line-height: 46px;
  }

  p {
    line-height: 28px;
    color: var(--color-textPrimary);
    margin-top: 24px;
  }

  footer {
    padding: 20px 0;
    text-align: center;

    a {
      line-height: 24px;
      color: var(--color-linkGoogleMaps);
      text-decoration: none;
    }
  }

  hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: var(--color-hr);
    margin: 64px 0;
  }

  button {
    margin-top: 64px;
    width: 100%;
    height: 64px;
    border: 0;
    background: var(--color-buttonWhatsapp);
    border-radius: 20px;
    color: var(--color-textButtonWhatsapp);
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: var(--color-buttonWhatsappHover);
    }
  }

  .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }
`
export const MapContainer = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
`

export const OpenDetails = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;

    svg {
      display: block;
      margin-bottom: 20px;
    }
  }
`

export const OpeningHours = styled.div`
  background: var(--color-background-openingHours);
  border: 1px solid #b3dae2;
  color: var(--color-textOpeningHours);
`

export const OpenOnWeekends = styled.div`
  background: var(--color-background-openOnWeekends);
  border: 1px solid #a1e9c5;
  color: var(--color-textOpenOnWeekends);
`

export const DontOpenOnWeekends = styled.div`
  background: var(--color-background-dontOpenOnWeekends);
  border: 1px solid #ffbcd4;
  color: var(--color-textDontOpenOnWeekends);
`

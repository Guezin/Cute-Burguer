import React, { useState, useCallback } from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet, { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'

import mapMarkerImg from '../../images/marker.png'

import Sidebar from '../../components/Sidebar'

import {
  Container,
  InputBlock,
  ImagesContainer,
  ButtonSelectContainer
} from './styles'

const CreateRestaurant: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  const handleMapClick = useCallback((envet: LeafletMouseEvent) => {
    const { lat, lng } = envet.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }, [])

  return (
    <Container>
      <Sidebar />

      <main>
        <form>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.4516163, -46.7279187]}
              zoom={15}
              style={{ width: '100%', height: '100%' }}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  position={[-23.4516163, -46.7279187]}
                  icon={Leaflet.icon({
                    iconUrl: mapMarkerImg,
                    iconSize: [48, 48],
                    iconAnchor: [34, 56]
                  })}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" onChange={() => {}} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>{' '}
              </label>
              <textarea id="about" maxLength={300} onChange={() => {}} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                <label htmlFor="image-array">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  id="image-array"
                  type="file"
                  multiple
                  onChange={() => {}}
                />
              </ImagesContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea id="name" onChange={() => {}} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input id="opening_hours" type="text" onChange={() => {}} />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelectContainer activeButton={1}>
                <button type="button" onClick={() => {}}>
                  Sim
                </button>
                <button type="button" onClick={() => {}}>
                  Não
                </button>
              </ButtonSelectContainer>
            </InputBlock>
          </fieldset>

          <button type="submit">Confirmar</button>
        </form>
      </main>
    </Container>
  )
}

export default CreateRestaurant

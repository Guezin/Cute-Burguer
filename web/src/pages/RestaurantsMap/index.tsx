import React, { useCallback } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import Leaflet from 'leaflet'

import logoImg from '../../images/logo.png'
import mapMarkerImg from '../../images/marker.png'

import { Container, CreateRestaurantButton } from './styles'

const RestaurantsMap: React.FC = () => {
  const history = useHistory()

  const handleNavigateToCreateRestaurantScreen = useCallback(() => {
    history.push('/restaurants/create')
  }, [history])

  return (
    <Container>
      <aside>
        <header>
          <img src={logoImg} alt="Cute Burguer" />

          <h2>Escolha um fast food no mapa</h2>
          <p>Se sentir um vazio, coma que é fome :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>Jaraguá</span>
        </footer>
      </aside>

      <Map
        center={[-23.4516163, -46.7279187]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          position={[-23.4516163, -46.7279187]}
          icon={Leaflet.icon({
            iconUrl: mapMarkerImg,
            iconSize: [48, 48],
            iconAnchor: [34, 56],
            popupAnchor: [-9, -60]
          })}
        >
          <Popup
            className="map-popup"
            closeButton={false}
            minWidth={240}
            maxWidth={240}
          >
            <p>Trềs Irmãos</p>
            <Link to="/restaurants">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <CreateRestaurantButton onClick={handleNavigateToCreateRestaurantScreen}>
        <FiPlus size={32} color="#fff" />
      </CreateRestaurantButton>
    </Container>
  )
}

export default RestaurantsMap

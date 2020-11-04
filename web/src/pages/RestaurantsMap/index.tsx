import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import Leaflet from 'leaflet'

import api from '../../services/api'

import logoImg from '../../images/logo.png'
import mapMarkerImg from '../../images/marker.png'

import { Container, CreateRestaurantButton } from './styles'

interface IRestaurant {
  restaurant_id: string
  name: string
  latitude: number
  longitude: number
}

const RestaurantsMap: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

  useEffect(() => {
    api
      .get('/restaurants/approved')
      .then(response => setRestaurants(response.data))
  }, [])

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

        {restaurants.map(restaurant => (
          <Marker
            key={restaurant.restaurant_id}
            position={[restaurant.latitude, restaurant.longitude]}
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
              <p>{restaurant.name}</p>
              <Link to={`/restaurants/${restaurant.restaurant_id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <CreateRestaurantButton to="/restaurants/create">
        <FiPlus size={32} color="#fff" />
      </CreateRestaurantButton>
    </Container>
  )
}

export default RestaurantsMap

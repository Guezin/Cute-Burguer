import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'
import { FiClock, FiInfo } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import api from '../../services/api'

import Sidebar from '../../components/Sidebar'
import mapMarkerImg from '../../images/marker.png'

import {
  Container,
  RestaurantDatails,
  RestaurantImages,
  Content,
  MapContainer,
  OpenDetails,
  OpeningHours,
  OpenOnWeekends,
  DontOpenOnWeekends
} from './styles'

interface IRouteParamsProps {
  restaurant_id: string
}

interface IRestaurant {
  name: string
  about: string
  latitude: number
  longitude: number
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    id: string
    url: string
  }>
}

const Restaurant: React.FC = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const { restaurant_id } = useParams<IRouteParamsProps>()

  useEffect(() => {
    api
      .get(`/restaurants/${restaurant_id}`)
      .then(response => setRestaurant(response.data))
  }, [restaurant_id])

  if (!restaurant) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <RestaurantDatails>
          <img
            src={restaurant.images[activeImageIndex].url}
            alt={restaurant.name}
          />

          <RestaurantImages>
            {restaurant.images.map((image, index) => {
              return (
                <button
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image.url} alt={restaurant.name} />
                </button>
              )
            })}
          </RestaurantImages>

          <Content>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.about}</p>

            <MapContainer>
              <Map
                center={[restaurant.latitude, restaurant.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  interactive={false}
                  icon={Leaflet.icon({
                    iconUrl: mapMarkerImg,
                    iconSize: [48, 48],
                    iconAnchor: [34, 56],
                    popupAnchor: [-9, -60]
                  })}
                  position={[restaurant.latitude, restaurant.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${restaurant.latitude},${restaurant.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{restaurant.instructions}</p>

            <OpenDetails>
              <OpeningHours>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {restaurant.opening_hours}
              </OpeningHours>

              {restaurant.open_on_weekends ? (
                <OpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <DontOpenOnWeekends>
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </DontOpenOnWeekends>
              )}
            </OpenDetails>

            <button type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </Content>
        </RestaurantDatails>
      </main>
    </Container>
  )
}

export default Restaurant

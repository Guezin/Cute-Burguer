import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'
import { FiClock, FiInfo, FiXCircle, FiCheck } from 'react-icons/fi'

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
  DontOpenOnWeekends,
  ButtonContainer
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

const RestaurantApprove: React.FC = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const params = useParams<IRouteParamsProps>()

  useEffect(() => {
    api
      .get(`/restaurants/${params.restaurant_id}`)
      .then(response => setRestaurant(response.data))
  }, [params])

  if (!restaurant) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <Sidebar goBack />

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
                  key={image.id}
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

            <h2>Instruções</h2>
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
          </Content>
          <ButtonContainer>
            <button type="button">
              <FiXCircle size={24} color="#FFF" />
              Recusar
            </button>

            <button type="button">
              <FiCheck size={24} color="#FFF" />
              Aceitar
            </button>
          </ButtonContainer>
        </RestaurantDatails>
      </main>
    </Container>
  )
}

export default RestaurantApprove

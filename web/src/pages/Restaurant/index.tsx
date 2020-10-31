import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'
import { FiClock, FiInfo } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

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

const Restaurant: React.FC = () => {
  return (
    <Container>
      <Sidebar />

      <main>
        <RestaurantDatails>
          <img
            src="https://i.pinimg.com/originals/40/89/a5/4089a577fc40aed4e89ba5430fd066bd.jpg"
            alt=""
          />

          <RestaurantImages>
            <button type="button">
              <img
                src="https://i.pinimg.com/originals/40/89/a5/4089a577fc40aed4e89ba5430fd066bd.jpg"
                alt=""
              />
            </button>

            <button type="button">
              <img
                src="https://i.pinimg.com/originals/40/89/a5/4089a577fc40aed4e89ba5430fd066bd.jpg"
                alt=""
              />
            </button>

            <button type="button">
              <img
                src="https://i.pinimg.com/originals/40/89/a5/4089a577fc40aed4e89ba5430fd066bd.jpg"
                alt=""
              />
            </button>
          </RestaurantImages>

          <Content>
            <h1>Três Irmãos</h1>
            <p>Toda comida aqui é muito boa, sempre fazemos com amor!</p>

            <MapContainer>
              <Map
                center={[-23.4516163, -46.7279187]}
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
                  position={[-23.4516163, -46.7279187]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=-23.4516163,-46.7279187`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>
              Venha como se sentir a vontade e traga muito fome para se
              alimentar bem.
            </p>

            <OpenDetails>
              <OpeningHours>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                08h até 18h
              </OpeningHours>

              {1 === 1 ? (
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

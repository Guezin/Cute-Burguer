import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

import mapMarkerImg from '../../images/marker.png'

import { Container } from './styles'

interface ILeafletMapProps {
  width?: string | number
  height?: string | number
}

const LeafletMap: React.FC<ILeafletMapProps> = ({
  width,
  height,
  children
}) => {
  return (
    <Container style={{ width: width || '100%', height: 308 }}>
      <Map
        center={[-23.4516163, -46.7279187]}
        zoom={16}
        style={{ width: width || '100%', height: height || 227 }}
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

      <footer>{children}</footer>
    </Container>
  )
}

export default LeafletMap

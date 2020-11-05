import React from 'react'

import LeafletMap from '../../components/LeafletMap'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LeafletMap width={544} height={227}>
        <h1>Três Irmãos</h1>
      </LeafletMap>
    </Container>
  )
}

export default Dashboard

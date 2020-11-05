import React from 'react'

import Sidebar from '../../components/Sidebar'

import { Container } from './styles'

const RestaurantsPending: React.FC = () => {
  return (
    <Container>
      <Sidebar active="/restaurants/pending" showButtons />

      <h1>Restaurants Pending</h1>
    </Container>
  )
}

export default RestaurantsPending

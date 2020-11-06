import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'

import api from '../../services/api'

import Sidebar from '../../components/Sidebar'
import LeafletMap from '../../components/LeafletMap'

import { Container, Content, FooterLeafletMap, ButtonContainer } from './styles'

interface IRestaurants {
  restaurant_id: string
  name: string
  latitude: number
  longitude: number
}

const RestaurantsPending: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('/restaurants/pending')

      setRestaurants(data)
    })()
  }, [])

  return (
    <Container>
      <Sidebar active="/restaurants/pending" showButtons />

      <Content>
        <header>
          <h1>Cadastros pendentes</h1>

          <span>
            {restaurants.length} fast food{restaurants.length > 1 ? 's' : ''}
          </span>
        </header>

        <main>
          {restaurants.map(restaurant => {
            return (
              <LeafletMap
                key={restaurant.restaurant_id}
                width={480}
                height={232}
                position={[restaurant.latitude, restaurant.longitude]}
              >
                <FooterLeafletMap>
                  <h1>{restaurant.name}</h1>

                  <ButtonContainer
                    to={`/restaurants/${restaurant.restaurant_id}/approve`}
                  >
                    <FiArrowRight size={18} color="#A32121" />
                  </ButtonContainer>
                </FooterLeafletMap>
              </LeafletMap>
            )
          })}
        </main>
      </Content>
    </Container>
  )
}

export default RestaurantsPending

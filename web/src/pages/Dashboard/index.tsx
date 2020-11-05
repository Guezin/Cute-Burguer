import React, { useState, useEffect } from 'react'
import { FiEdit3, FiTrash } from 'react-icons/fi'

import api from '../../services/api'

import Sidebar from '../../components/Sidebar'
import LeafletMap from '../../components/LeafletMap'

import {
  Container,
  Content,
  FooterLeafletMap,
  ButtonContainer,
  EditButton,
  DeleteButton
} from './styles'

interface IRestaurants {
  restaurant_id: string
  name: string
}

const Dashboard: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurants[]>([])
  const [notification, setNotification] = useState(false)

  useEffect(() => {
    ;(async () => {
      const restaurantsApproved = await api.get('/restaurants/approved')
      const restaurantsPending = await api.get('/restaurants/pending')

      if (!!restaurantsPending.data.length) {
        setNotification(true)
      }

      setRestaurants(restaurantsApproved.data)
    })()
  }, [])

  return (
    <Container>
      <Sidebar active="/dashboard" showButtons hasNotification={notification} />

      <Content>
        <header>
          <h1>Fast Foods Cadastrados</h1>

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
              >
                <FooterLeafletMap>
                  <h1>{restaurant.name}</h1>

                  <ButtonContainer>
                    <EditButton to="">
                      <FiEdit3 size={18} color="#A32121" />
                    </EditButton>

                    <DeleteButton to="">
                      <FiTrash size={18} color="#A32121" />
                    </DeleteButton>
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

export default Dashboard

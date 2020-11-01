import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import doneImg from '../../images/ilustra-done.png'

import { Container, Content, ImageContainer } from './styles'

const Done: React.FC = () => {
  const history = useHistory()

  const handleNavigateToRestaurantsMapScreen = useCallback(() => {
    history.push('/restaurants-map')
  }, [history])

  return (
    <Container>
      <main>
        <Content>
          <h1>Ebaaa!</h1>

          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>

          <button type="button" onClick={handleNavigateToRestaurantsMapScreen}>
            Voltar para o mapa
          </button>
        </Content>

        <ImageContainer>
          <img src={doneImg} alt="Cute Burguer" />
        </ImageContainer>
      </main>
    </Container>
  )
}

export default Done

import React from 'react'

import doneImg from '../../images/ilustra-done.png'

import { Container, Content, Navigate, ImageContainer } from './styles'

const Done: React.FC = () => {
  return (
    <Container>
      <main>
        <Content>
          <h1>Ebaaa!</h1>

          <p>
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>

          <Navigate to="/restaurants">Voltar para o mapa</Navigate>
        </Content>

        <ImageContainer>
          <img src={doneImg} alt="Cute Burguer" />
        </ImageContainer>
      </main>
    </Container>
  )
}

export default Done

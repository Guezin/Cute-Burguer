import React from 'react'

import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../../images/logo.png'
import ilustraLandingImg from '../../images/ilustra-landing.png'

import {
  Container,
  Content,
  Location,
  RestrictedAccess,
  TitleContainer,
  Navigate
} from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <div>
            <img src={logoImg} alt="Cute Burguer" />

            <Location>
              <strong>São Paulo</strong>
              <span>Jaraguá</span>
            </Location>
          </div>

          <RestrictedAccess to="/signIn">
            <strong>Acesso restrito</strong>
          </RestrictedAccess>
        </header>
        <main>
          <TitleContainer>
            <h1>
              Leve <br /> Fast Food para o mundo
            </h1>
            <p>
              Todo dia é dia de <strong>#CuteBurguer</strong>
            </p>
          </TitleContainer>

          <img src={ilustraLandingImg} alt="Cute Burguer" />

          <Navigate to="/restaurants">
            <FiArrowRight size={26} />
          </Navigate>
        </main>
      </Content>
    </Container>
  )
}

export default Landing

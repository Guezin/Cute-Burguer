import React, { useCallback, useState } from 'react'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'

import Input from '../../components/Input'

import logoImg from '../../images/logo.png'

import { Container, LogoContainer, Content, GoBack } from './styles'

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <main>
        <LogoContainer>
          <img src={logoImg} alt="Cute Burguer" />

          <div>
            <strong>São Paulo</strong>
            <span>Jaraguá</span>
          </div>
        </LogoContainer>

        <Content>
          <GoBack to="/signIn">
            <FiArrowLeft size={20} color="#A32121" />
          </GoBack>

          <fieldset>
            <legend>Esqueci a senha</legend>

            <p>
              Sua redefinição de senha será enviada para o e-mail cadastrado.
            </p>

            <Form onSubmit={() => {}}>
              <Input name="email" label="E-mail" />

              <button type="submit">Recuperar</button>
            </Form>
          </fieldset>
        </Content>
      </main>
    </Container>
  )
}

export default ForgotPassword

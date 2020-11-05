import React, { useCallback, useState } from 'react'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'

import Input from '../../components/Input'

import logoImg from '../../images/logo.png'

import {
  Container,
  LogoContainer,
  Content,
  GoBack,
  Section,
  RememberMeContainer,
  RememberMeCheckBox,
  ForgotPassword
} from './styles'

const SignIn: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false)

  const handleRememberMeCheckBox = useCallback(() => {
    setRememberMe(!rememberMe)
  }, [rememberMe])

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
          <GoBack to="/">
            <FiArrowLeft size={20} color="#A32121" />
          </GoBack>

          <fieldset>
            <legend>Fazer login</legend>

            <Form onSubmit={() => {}}>
              <Input name="email" label="E-mail" />
              <Input name="password" label="Senha" />

              <Section>
                <RememberMeContainer>
                  <RememberMeCheckBox
                    remember={rememberMe}
                    onClick={handleRememberMeCheckBox}
                  >
                    <FiCheck
                      size={16}
                      color={rememberMe ? '#FFF' : '#f5f8fa'}
                    />
                  </RememberMeCheckBox>
                  Lembrar-me
                </RememberMeContainer>

                <ForgotPassword to="/forgot-password">
                  Esqueci minha senha
                </ForgotPassword>
              </Section>

              <button type="submit">Entrar</button>
            </Form>
          </fieldset>
        </Content>
      </main>
    </Container>
  )
}

export default SignIn

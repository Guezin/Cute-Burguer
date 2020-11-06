import React from 'react'
import { FiMapPin, FiAlertCircle, FiArrowLeft, FiPower } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import logoImg from '../../images/logo.png'

import { Aside, Navigate, Notification, Button } from './styles'

interface ISidebarProps {
  showButtons?: boolean
  active?: string
  hasNotification?: boolean
  goBack?: boolean
}

const Sidebar: React.FC<ISidebarProps> = ({
  showButtons,
  active,
  goBack,
  hasNotification
}) => {
  const history = useHistory()

  return (
    <Aside>
      <img src={logoImg} alt="Cute Burguer" />

      {showButtons && (
        <main>
          <Navigate to="/dashboard" activate={Number(active === '/dashboard')}>
            <FiMapPin size={24} />
          </Navigate>

          <Navigate
            to="/restaurants/pending"
            activate={Number(active === '/restaurants/pending')}
          >
            {hasNotification && <Notification />}

            <FiAlertCircle size={24} />
          </Navigate>
        </main>
      )}

      <footer>
        {goBack ? (
          <button type="button" onClick={history.goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        ) : (
          <Button to="/">
            <FiPower size={24} color="#FFF" />
          </Button>
        )}
      </footer>
    </Aside>
  )
}

export default Sidebar

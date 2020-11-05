import React from 'react'
import { FiArrowLeft, FiMapPin, FiAlertCircle } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

import logoImg from '../../images/logo.png'

import { Aside, Navigate, Notification } from './styles'

interface ISidebarProps {
  showButtons?: boolean
  active?: string
  hasNotification?: boolean
}

const Sidebar: React.FC<ISidebarProps> = ({
  showButtons,
  active,
  hasNotification
}) => {
  const { goBack } = useHistory()

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
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </Aside>
  )
}

export default Sidebar

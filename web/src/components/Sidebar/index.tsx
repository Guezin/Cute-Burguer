import React from 'react'
import { FiPower, FiMapPin, FiAlertCircle } from 'react-icons/fi'

import logoImg from '../../images/logo.png'

import { Aside, Navigate, Notification, LogoutButton } from './styles'

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
        <LogoutButton to="/">
          <FiPower size={24} color="#FFF" />
        </LogoutButton>
      </footer>
    </Aside>
  )
}

export default Sidebar

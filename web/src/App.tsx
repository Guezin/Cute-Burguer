import React from 'react'
import 'leaflet/dist/leaflet.css'

import Routes from './routes'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default App

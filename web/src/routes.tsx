import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingScreen from './pages/Landing'
import RestaurantsMapScreen from './pages/RestaurantsMap'
import RestaurantScreen from './pages/Restaurant'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />

        <Route path="/restaurants-map" component={RestaurantsMapScreen} />
        <Route path="/restaurants" component={RestaurantScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingScreen from './pages/Landing'
import RestaurantsMapScreen from './pages/RestaurantsMap'
import RestaurantScreen from './pages/Restaurant'
import CreateRestaurantScreen from './pages/CreateRestaurant'
import DoneScreen from './pages/Done'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />

        <Route path="/restaurants-map" component={RestaurantsMapScreen} />
        <Route
          path="/restaurants/:restaurant_id"
          exact
          component={RestaurantScreen}
        />
        <Route path="/restaurants/create" component={CreateRestaurantScreen} />

        <Route path="/done" component={DoneScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

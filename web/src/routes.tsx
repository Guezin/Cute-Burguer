import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingScreen from './pages/Landing'
import RestaurantsMapScreen from './pages/RestaurantsMap'
import RestaurantScreen from './pages/Restaurant'
import CreateRestaurantScreen from './pages/CreateRestaurant'
import DoneScreen from './pages/Done'

import SignInScreen from './pages/SignIn'
import ForgotPasswordScreen from './pages/ForgotPassword'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingScreen} />

        <Route path="/restaurants" exact component={RestaurantsMapScreen} />
        <Route path="/restaurants/create" component={CreateRestaurantScreen} />
        <Route
          path="/restaurants/:restaurant_id"
          component={RestaurantScreen}
        />

        <Route path="/done" component={DoneScreen} />

        <Route path="/signIn" component={SignInScreen} />
        <Route path="/forgot-password" component={ForgotPasswordScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

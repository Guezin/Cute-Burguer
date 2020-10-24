import { Router, IRouter } from 'express'

import AuthRoutes from '@modules/users/infra/http/routes/auth.routes'

import UserRoutes from '@modules/users/infra/http/routes/user.routes'
import RestaurantRoutes from '@modules/restaurants/infra/http/routes/restaurant.routes'

class Routes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.use('/auth', AuthRoutes)

    this.routes.use('/users', UserRoutes)

    this.routes.use('/restaurants', RestaurantRoutes)
  }
}

export default new Routes().routes

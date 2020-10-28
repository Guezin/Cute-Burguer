import { Router, IRouter } from 'express'

import AuthRoutes from '@modules/users/infra/http/routes/auth.routes'

import UserRoutes from '@modules/users/infra/http/routes/user.routes'
import ForgotPasswordRoutes from '@modules/users/infra/http/routes/forgot_password.routes'
import ResetPasswordRoutes from '@modules/users/infra/http/routes/reset_password.routes'
import RestaurantRoutes from '@modules/restaurants/infra/http/routes/restaurant.routes'

import ensureAuthentication from '../middlewares/ensureAuthentication'

class Routes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.use('/password/forgot', ForgotPasswordRoutes)
    this.routes.use('/password/reset', ResetPasswordRoutes)

    this.routes.use('/auth', AuthRoutes)

    this.routes.use('/users', ensureAuthentication, UserRoutes)

    this.routes.use('/restaurants', RestaurantRoutes)
  }
}

export default new Routes().routes

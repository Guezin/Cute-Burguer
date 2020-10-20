import { Router, IRouter } from 'express'

import AuthRoutes from '@modules/users/infra/http/routes/auth.routes'

class Routes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.use('/auth', AuthRoutes)
  }
}

export default new Routes().routes

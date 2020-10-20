import { Router, IRouter } from 'express'

import AuthController from '../controllers/AuthController'

class AuthRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.post('/', AuthController.store)
  }
}

export default new AuthRoutes().routes

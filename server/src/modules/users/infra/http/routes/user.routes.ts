import { Router, IRouter } from 'express'

import UserController from '../controllers/UserController'

class UserRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.post('/', UserController.store)
  }
}

export default new UserRoutes().routes

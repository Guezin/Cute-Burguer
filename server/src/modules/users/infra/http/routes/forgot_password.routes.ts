import { Router, IRouter } from 'express'

import ForgotPasswordController from '../controllers/ForgotPasswordController'

class ForgotPasswordRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.post('/', ForgotPasswordController.store)
  }
}

export default new ForgotPasswordRoutes().routes

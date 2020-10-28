import { Router, IRouter } from 'express'

import ResetPasswordController from '../controllers/ResetPasswordController'

class ResetPasswordRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.post('/', ResetPasswordController.store)
  }
}

export default new ResetPasswordRoutes().routes

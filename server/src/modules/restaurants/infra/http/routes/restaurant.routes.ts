import { Router, IRouter } from 'express'

import RestaurantController from '../controllers/RestaurantController'

class RestaurantRoutes {
  public readonly routes: IRouter

  constructor() {
    this.routes = Router()

    this.main()
  }

  main() {
    this.routes.post('/', RestaurantController.store)
  }
}

export default new RestaurantRoutes().routes

import { Router, IRouter } from 'express'
import multer, { Multer } from 'multer'

import uploadonfig from '@config/upload'
// import ensureAuthentication from '@shared/infra/http/middlewares/ensureAuthentication'

import RestaurantController from '../controllers/RestaurantController'
import ApprovedRestaurantController from '../controllers/ApprovedRestaurantController'
import PendingRestaurantController from '../controllers/PendingRestaurantController'

class RestaurantRoutes {
  public readonly routes: IRouter
  private upload: Multer

  constructor() {
    this.routes = Router()
    this.upload = multer(uploadonfig)

    this.main()
  }

  main() {
    this.routes.get('/approved', ApprovedRestaurantController.index)
    this.routes.get('/pending', PendingRestaurantController.index)
    this.routes.post('/approve', ApprovedRestaurantController.store)

    this.routes.get('/:restaurant_id', RestaurantController.show)
    this.routes.post(
      '/',
      this.upload.array('images'),
      RestaurantController.store
    )
  }
}

export default new RestaurantRoutes().routes

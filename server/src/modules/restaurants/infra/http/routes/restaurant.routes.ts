import { Router, IRouter } from 'express'
import multer, { Multer } from 'multer'

import uploadonfig from '@config/upload'

import RestaurantController from '../controllers/RestaurantController'

class RestaurantRoutes {
  public readonly routes: IRouter
  private upload: Multer

  constructor() {
    this.routes = Router()
    this.upload = multer(uploadonfig)

    this.main()
  }

  main() {
    this.routes.post(
      '/',
      this.upload.array('images'),
      RestaurantController.store
    )
  }
}

export default new RestaurantRoutes().routes

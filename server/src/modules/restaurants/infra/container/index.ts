import { container } from 'tsyringe'

import RestaurantRepository from '@modules/restaurants/infra/typeorm/repositories/RestaurantRepository'
import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'

container.registerSingleton<IRestaurantRepository>(
  'RestaurantRepository',
  RestaurantRepository
)

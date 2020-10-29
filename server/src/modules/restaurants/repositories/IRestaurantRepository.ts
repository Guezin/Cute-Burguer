import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '@modules/restaurants/infra/typeorm/entities/Address'

import ICreateRestaurantDTO from '../dtos/ICreateRestaurantDTO'

export interface ICreateRestaurantResponse {
  restaurant: Restaurant
  address: Address
}

export default interface IRestaurantRepository {
  create: (
    restaurantData: ICreateRestaurantDTO
  ) => Promise<ICreateRestaurantResponse>
}

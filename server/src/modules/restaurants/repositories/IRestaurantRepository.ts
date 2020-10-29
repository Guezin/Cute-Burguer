import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '@modules/restaurants/infra/typeorm/entities/Address'

import ICreateRestaurantDTO from '../dtos/ICreateRestaurantDTO'

export interface ICreateRestaurantResponse {
  restaurant: Restaurant
  address: Address
}

export interface IListRestaurantResponse {
  restaurant: Restaurant | undefined
  address: Address | undefined
}

export default interface IRestaurantRepository {
  create: (restaurantData: ICreateRestaurantDTO) => Promise<Restaurant>
  findById: (restaurant_id: string) => Promise<Restaurant | undefined>
  listAllApproved: () => Promise<Restaurant[]>
}

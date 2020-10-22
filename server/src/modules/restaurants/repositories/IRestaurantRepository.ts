import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

import ICreateRestaurantDTO from '../dtos/ICreateRestaurantDTO'

export default interface IRestaurantRepository {
  create: (restaurantData: ICreateRestaurantDTO) => Promise<Restaurant>
}

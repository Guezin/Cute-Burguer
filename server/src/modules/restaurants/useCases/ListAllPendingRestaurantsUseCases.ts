import { inject, injectable } from 'tsyringe'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import IRestaurantRepository from '../repositories/IRestaurantRepository'

@injectable()
class ListAllPendingRestaurantsUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantRepository.listAllPending()

    return restaurants
  }
}

export default ListAllPendingRestaurantsUseCases

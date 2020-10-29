import { inject, injectable } from 'tsyringe'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import IRestaurantRepository from '../repositories/IRestaurantRepository'

@injectable()
class ListAllApprovedRestaurantsUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute(): Promise<Restaurant[]> {
    const restaurants = await this.restaurantRepository.listAllApproved()

    return restaurants
  }
}

export default ListAllApprovedRestaurantsUseCases

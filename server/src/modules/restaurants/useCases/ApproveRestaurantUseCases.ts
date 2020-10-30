import { inject, injectable } from 'tsyringe'
import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'

import AppError from '@shared/errors/AppError'

@injectable()
class ApproveRestaurantUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute(restaurant_id: string): Promise<void> {
    const restaurant = await this.restaurantRepository.findById(restaurant_id)

    if (!restaurant) {
      throw new AppError('Sorry, restaurant not found! Try again.')
    }

    await this.restaurantRepository.approve(restaurant)
  }
}

export default ApproveRestaurantUseCases

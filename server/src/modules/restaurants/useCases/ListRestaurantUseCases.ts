import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

import IRestaurantRepository from '../repositories/IRestaurantRepository'

@injectable()
class ListRestaurantUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute(restaurant_id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.findById(restaurant_id)

    if (!restaurant) {
      throw new AppError('Sorry, restaurant not found! Try again.')
    }

    return restaurant
  }
}

export default ListRestaurantUseCases

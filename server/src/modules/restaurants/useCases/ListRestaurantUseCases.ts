import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '../infra/typeorm/entities/Address'

import IRestaurantRepository from '../repositories/IRestaurantRepository'

interface IResponse {
  restaurant: Restaurant
  address: Address
}

@injectable()
class ListRestaurantUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute(restaurant_id: string): Promise<IResponse> {
    const { restaurant, address } = await this.restaurantRepository.findById(
      restaurant_id
    )

    if (!restaurant) {
      throw new AppError('Sorry, restaurant not found! Try again.')
    }

    if (!address) {
      throw new AppError('Sorry, address not found! Try again.')
    }

    return { restaurant, address }
  }
}

export default ListRestaurantUseCases

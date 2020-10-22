import { getRepository, Repository } from 'typeorm'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'
import ICreateRestaurantDTO from '@modules/restaurants/dtos/ICreateRestaurantDTO'

class RestaurantRepository implements IRestaurantRepository {
  private ormRepository: Repository<Restaurant>

  constructor() {
    this.ormRepository = getRepository(Restaurant)
  }

  public async create({
    name,
    latitude,
    longitude,
    opening_hours,
    open_on_weekends,
    address,
    images
  }: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.ormRepository.create({
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      address,
      images
    })

    // await this.ormRepository.save(restaurant)

    return restaurant
  }
}

export default RestaurantRepository

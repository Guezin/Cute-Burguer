import { getRepository, Repository } from 'typeorm'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '../entities/Address'

import IRestaurantRepository, {
  ICreateRestaurantResponse
} from '@modules/restaurants/repositories/IRestaurantRepository'
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
  }: ICreateRestaurantDTO): Promise<ICreateRestaurantResponse> {
    const restaurant = this.ormRepository.create({
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      images
    })

    await this.ormRepository.save(restaurant)

    const { street, number, neighborhood, city, state, zipcode } = address
    const _address = await this.ormRepository.manager
      .getRepository(Address)
      .save({
        street,
        number,
        neighborhood,
        city,
        state,
        zipcode,
        restaurant_id: restaurant.id
      })

    return {
      restaurant,
      address: _address
    }
  }
}

export default RestaurantRepository

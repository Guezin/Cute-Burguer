import { getRepository, Repository } from 'typeorm'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '../entities/Address'

import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'
import ICreateRestaurantDTO from '@modules/restaurants/dtos/ICreateRestaurantDTO'

class RestaurantRepository implements IRestaurantRepository {
  private ormRepository: Repository<Restaurant>

  constructor() {
    this.ormRepository = getRepository(Restaurant)
  }

  public async findById(
    restaurant_id: string
  ): Promise<Restaurant | undefined> {
    const restaurant = await this.ormRepository.findOne({
      where: { id: restaurant_id }
    })

    return restaurant
  }

  public async listAllApproved(): Promise<Restaurant[]> {
    const restaurants = await this.ormRepository.find({
      where: { status: 'approved' }
    })

    return restaurants
  }

  public async listAllPending(): Promise<Restaurant[]> {
    const restaurants = await this.ormRepository.find({
      where: { status: 'pending' }
    })

    return restaurants
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
    const { street, number, neighborhood, city, state, zipcode } = address
    const _address = await this.ormRepository.manager
      .getRepository(Address)
      .save({
        street,
        number,
        neighborhood,
        city,
        state,
        zipcode
      })

    const restaurant = this.ormRepository.create({
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      address_id: _address.id,
      address: _address,
      images
    })

    await this.ormRepository.save(restaurant)

    return restaurant
  }

  public async approve(restaurant: Restaurant): Promise<void> {
    restaurant.status = 'approved'

    await this.ormRepository.save(restaurant)
  }
}

export default RestaurantRepository

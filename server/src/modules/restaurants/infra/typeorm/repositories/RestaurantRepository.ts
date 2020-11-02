import { getRepository, Repository } from 'typeorm'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

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
    about,
    latitude,
    longitude,
    whatsapp_phone,
    instructions,
    opening_hours,
    open_on_weekends,
    images
  }: ICreateRestaurantDTO): Promise<Restaurant> {
    const restaurant = this.ormRepository.create({
      name,
      about,
      latitude,
      longitude,
      whatsapp_phone,
      instructions,
      opening_hours,
      open_on_weekends,
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

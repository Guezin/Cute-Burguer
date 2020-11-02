import { inject, injectable } from 'tsyringe'
import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'

import Restaurant from '../infra/typeorm/entities/Restaurant'

interface IRequest {
  name: string
  about: string
  latitude: number
  longitude: number
  whatsapp_phone: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    path: string
  }>
}
@injectable()
class CreateRestaurantUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute({
    name,
    about,
    latitude,
    longitude,
    whatsapp_phone,
    instructions,
    opening_hours,
    open_on_weekends,
    images
  }: IRequest): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.create({
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

    return restaurant
  }
}

export default CreateRestaurantUseCases

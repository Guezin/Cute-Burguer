import { inject, injectable } from 'tsyringe'

// import AppError from '@shared/errors/AppError'

import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

import IRestaurantRepository from '@modules/restaurants/repositories/IRestaurantRepository'

interface IRequest {
  name: string
  latitude: number
  longitude: number
  opening_hours: string
  open_on_weekends: boolean
  address: {
    street: string
    number: number
    neighborhood: string
    city: string
    state: string
    zipcode: string
  }
  images: Array<{
    path: string
  }>
}

@injectable()
class AuthUserUseCases {
  constructor(
    @inject('RestaurantRepository')
    private restaurantRepository: IRestaurantRepository
  ) {}

  public async execute({
    name,
    latitude,
    longitude,
    opening_hours,
    open_on_weekends,
    address,
    images
  }: IRequest): Promise<Restaurant> {
    const restaurant = await this.restaurantRepository.create({
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      address,
      images
    })

    return restaurant
  }
}

export default AuthUserUseCases

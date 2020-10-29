import { inject, injectable } from 'tsyringe'
import IRestaurantRepository, {
  ICreateRestaurantResponse
} from '@modules/restaurants/repositories/IRestaurantRepository'

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
class CreateRestaurantUseCases {
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
  }: IRequest): Promise<ICreateRestaurantResponse> {
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

export default CreateRestaurantUseCases

// import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

import ICreateRestaurantDTO from '../dtos/ICreateRestaurantDTO'

export interface ICreateRestaurantResponse {
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

export default interface IRestaurantRepository {
  create: (
    restaurantData: ICreateRestaurantDTO
  ) => Promise<ICreateRestaurantResponse>
}

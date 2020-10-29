import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'
import Address from '@modules/restaurants/infra/typeorm/entities/Address'

interface IRenderProps {
  restaurant: Restaurant
  address: Address
}

interface IResponseRender {
  restaurant_id: string
  name: string
  status: string
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

export default {
  render({ restaurant, address }: IRenderProps): IResponseRender {
    return {
      restaurant_id: restaurant.id,
      name: restaurant.name,
      status: restaurant.status,
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      opening_hours: restaurant.opening_hours,
      open_on_weekends: restaurant.open_on_weekends,
      address: {
        street: address.street,
        number: address.number,
        neighborhood: address.neighborhood,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode
      },
      images: restaurant.images
    }
  }
}

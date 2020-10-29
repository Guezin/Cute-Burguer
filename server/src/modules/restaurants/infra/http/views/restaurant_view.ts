import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

interface IResponse {
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
  render(restaurant: Restaurant): IResponse {
    return {
      restaurant_id: restaurant.id,
      name: restaurant.name,
      status: restaurant.status,
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      opening_hours: restaurant.opening_hours,
      open_on_weekends: restaurant.open_on_weekends,
      address: {
        street: restaurant.address.street,
        number: restaurant.address.number,
        neighborhood: restaurant.address.neighborhood,
        city: restaurant.address.city,
        state: restaurant.address.state,
        zipcode: restaurant.address.zipcode
      },
      images: restaurant.images.map(image => {
        return {
          id: image.id,
          path: image.path
        }
      })
    }
  },
  renderMany(restaurants: Restaurant[]): IResponse[] {
    return restaurants.map(restaurant => {
      return {
        restaurant_id: restaurant.id,
        name: restaurant.name,
        status: restaurant.status,
        latitude: restaurant.latitude,
        longitude: restaurant.longitude,
        opening_hours: restaurant.opening_hours,
        open_on_weekends: restaurant.open_on_weekends,
        address: {
          street: restaurant.address.street,
          number: restaurant.address.number,
          neighborhood: restaurant.address.neighborhood,
          city: restaurant.address.city,
          state: restaurant.address.state,
          zipcode: restaurant.address.zipcode
        },
        images: restaurant.images.map(image => {
          return {
            id: image.id,
            path: image.path
          }
        })
      }
    })
  }
}

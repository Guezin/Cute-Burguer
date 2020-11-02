import Restaurant from '@modules/restaurants/infra/typeorm/entities/Restaurant'

interface IResponse {
  restaurant_id: string
  name: string
  about: string
  status: string
  latitude: number
  longitude: number
  whatsapp_phone: string
  instructions: string
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
      about: restaurant.about,
      status: restaurant.status,
      latitude: Number(restaurant.latitude),
      longitude: Number(restaurant.longitude),
      whatsapp_phone: restaurant.whatsapp_phone,
      instructions: restaurant.instructions,
      opening_hours: restaurant.opening_hours,
      open_on_weekends: restaurant.open_on_weekends,
      address: {
        street: restaurant.address.street,
        number: Number(restaurant.address.number),
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
        about: restaurant.about,
        status: restaurant.status,
        latitude: Number(restaurant.latitude),
        longitude: Number(restaurant.longitude),
        whatsapp_phone: restaurant.whatsapp_phone,
        instructions: restaurant.instructions,
        opening_hours: restaurant.opening_hours,
        open_on_weekends: restaurant.open_on_weekends,
        address: {
          street: restaurant.address.street,
          number: Number(restaurant.address.number),
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

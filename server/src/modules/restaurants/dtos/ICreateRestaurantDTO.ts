export default interface ICreateRestaurantDTO {
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

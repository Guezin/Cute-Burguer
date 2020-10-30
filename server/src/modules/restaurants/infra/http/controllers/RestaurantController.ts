import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListRestaurantUseCases from '@modules/restaurants/useCases/ListRestaurantUseCases'
import CreateRestaurantUseCases from '@modules/restaurants/useCases/CreateRestaurantUseCases'

import restaurantView from '../views/restaurant_view'

class RestaurantController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { restaurant_id } = request.params

    const listRestaurant = container.resolve(ListRestaurantUseCases)

    const restaurant = await listRestaurant.execute(restaurant_id)

    return response.json(restaurantView.render(restaurant))
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends,
      address
    } = request.body

    const requestImages = request.files as Express.Multer.File[]

    const images = requestImages.map(image => {
      return {
        path: image.filename
      }
    })

    const data = {
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      address: JSON.parse(address),
      images
    }

    const createRestaurant = container.resolve(CreateRestaurantUseCases)

    const restaurant = await createRestaurant.execute(data)

    return response.json(restaurantView.render(restaurant))
  }
}

export default new RestaurantController()

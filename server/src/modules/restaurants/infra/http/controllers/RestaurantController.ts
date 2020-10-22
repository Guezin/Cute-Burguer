import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateRestaurantUseCases from '@modules/restaurants/useCases/CreateRestaurantUseCases'

class RestaurantController {
  public async store(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      opening_hours,
      open_on_weekends
    } = request.body

    const requestImages = request.files as Express.Multer.File[]

    console.log(request.body)
    console.log(requestImages)

    const createRestaurant = container.resolve(CreateRestaurantUseCases)

    // const restaurant = await createRestaurant.execute({
    //   name,
    //   latitude,
    //   longitude,
    //   opening_hours,
    //   open_on_weekends,
    //   address,
    //   images
    // })

    return response.json()
  }
}

export default new RestaurantController()

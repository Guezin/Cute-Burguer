import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ListAllPendingRestaurantUseCases from '@modules/restaurants/useCases/ListAllPendingRestaurantsUseCases'
import restaurantView from '../views/restaurant_view'

class PendingRestaurantController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllPending = container.resolve(ListAllPendingRestaurantUseCases)

    const restaurants = await listAllPending.execute()

    return response.json(restaurantView.renderMany(restaurants))
  }
}

export default new PendingRestaurantController()

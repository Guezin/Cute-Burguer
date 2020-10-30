import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListAllApprovedRestaurantUseCases from '@modules/restaurants/useCases/ListAllApprovedRestaurantsUseCases'
import ApproveRestaurantUseCases from '@modules/restaurants/useCases/ApproveRestaurantUseCases'

import restaurantView from '../views/restaurant_view'

class ApprovedRestaurantController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllApproved = container.resolve(ListAllApprovedRestaurantUseCases)

    const restaurants = await listAllApproved.execute()

    return response.json(restaurantView.renderMany(restaurants))
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { restaurant_id } = request.body

    const approveRestaurant = container.resolve(ApproveRestaurantUseCases)

    await approveRestaurant.execute(restaurant_id)

    return response.status(204).json()
  }
}

export default new ApprovedRestaurantController()

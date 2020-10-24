import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUserUseCases from '@modules/users/useCases/CreateUserUseCases'

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    const createUser = container.resolve(CreateUserUseCases)

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return response.status(201).json(user)
  }
}

export default new UserController()

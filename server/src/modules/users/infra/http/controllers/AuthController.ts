import { Request, Response } from 'express'
import { container } from 'tsyringe'

import AuthUserUseCases from '@modules/users/useCases/AuthUserUseCases'

class AuthController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authUser = container.resolve(AuthUserUseCases)

    const user = await authUser.execute({
      email,
      password
    })

    return response.json(user)
  }
}

export default new AuthController()

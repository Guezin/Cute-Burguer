import { Request, Response } from 'express'
import { container } from 'tsyringe'

import AuthUserUseCases from '@modules/users/useCases/AuthUserUseCases'

import authView from '../views/auth_view'

class AuthController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authUser = container.resolve(AuthUserUseCases)

    const { user, token } = await authUser.execute({
      email,
      password
    })

    return response.json(authView.render({ user, token }))
  }
}

export default new AuthController()

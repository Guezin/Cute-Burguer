import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ResetPasswordUseCases from '@modules/users/useCases/ResetPasswordUseCases'

class ResetPasswordController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body

    const resetPassword = container.resolve(ResetPasswordUseCases)

    await resetPassword.execute({
      token,
      password
    })

    return response.status(204).json()
  }
}

export default new ResetPasswordController()

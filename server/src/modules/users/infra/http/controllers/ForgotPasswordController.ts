import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ForgotPasswordUseCases from '@modules/users/useCases/ForgotPasswordUseCases'

class ForgotPasswordController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    const forgotPassword = container.resolve(ForgotPasswordUseCases)

    await forgotPassword.execute(email)

    return response.status(201).json()
  }
}

export default new ForgotPasswordController()

import { inject, injectable } from 'tsyringe'
import path from 'path'

import AppError from '@shared/errors/AppError'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import IEtherealMail from '@shared/infra/container/providers/Ethereal/models/IEtherealMailProvider'
import IUserTokensRepository from '../repositories/IUserTokensRepository'

@injectable()
class ForgotPasswordUseCases {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('EtherealMail')
    private etherealMail: IEtherealMail
  ) {}

  public async execute(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError(
        'Sorry, user not found. Try to create an account!',
        401
      )
    }

    const { token } = await this.userTokensRepository.generateToken(user.id)

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs'
    )

    await this.etherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      subject: 'Redefinição de senha! <Cute Burguer>',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`
        }
      }
    })
  }
}

export default ForgotPasswordUseCases

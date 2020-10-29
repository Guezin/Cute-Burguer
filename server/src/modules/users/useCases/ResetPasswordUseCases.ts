import { inject, injectable } from 'tsyringe'
import { addHours, isAfter } from 'date-fns'

import AppError from '@shared/errors/AppError'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'
import IBcrypt from '@shared/infra/container/providers/Bcrypt/models/IBcryptProvider'

interface IRequest {
  token: string
  password: string
}

@injectable()
class ResetPasswordUseCases {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('Bcrypt')
    private bcrypt: IBcrypt
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.userTokensRepository.findByToken(token)

    if (!userToken) {
      throw new AppError('User token does not exists.')
    }

    const compareDate = addHours(userToken.created_at, 2)

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired.')
    }

    const user = await this.userRepository.findById(userToken.user_id)

    if (!user) {
      throw new AppError('User not found!')
    }

    user.password = await this.bcrypt.generateHash(password)

    await this.userRepository.save(user)
  }
}

export default ResetPasswordUseCases

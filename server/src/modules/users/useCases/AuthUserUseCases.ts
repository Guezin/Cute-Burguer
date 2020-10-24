import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import IJsonWebToken from '@shared/infra/container/providers/JsonWebToken/models/IJsonWebTokenProvider'
import IBcrypt from '@shared/infra/container/providers/Bcrypt/models/IBcryptProvider'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

@injectable()
class AuthUserUseCases {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('JsonWebToken')
    private JWT: IJsonWebToken,

    @inject('Bcrypt')
    private bcrypt: IBcrypt
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Sorry email/password invalid, try again!', 401)
    }

    const isValidPassword = await this.bcrypt.compareHash(
      password,
      user.password
    )

    if (!isValidPassword) {
      throw new AppError('Sorry email/password invalid, try again!', 401)
    }

    if (user.provider === false) {
      throw new AppError('Access denied, only for admin users!', 401)
    }

    const token = this.JWT.generateToken(user.id)
    return { user, token }
  }
}

export default AuthUserUseCases

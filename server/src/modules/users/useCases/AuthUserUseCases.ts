import { inject, injectable } from 'tsyringe'
import { compare } from 'bcrypt'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import IJsonWebToken from '@shared/infra/container/providers/JsonWebToken/models/IJsonWebToken'

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
    private JWT: IJsonWebToken
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Sorry email/password invalid, try again!')
    }

    if (!(await compare(password, user.password))) {
      throw new AppError('Sorry email/password invalid, try again!')
    }

    const token = this.JWT.generateToken(user.id)
    return { user, token }
  }
}

export default AuthUserUseCases

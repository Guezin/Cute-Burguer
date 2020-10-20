import { inject, injectable } from 'tsyringe'
import JWT from 'jsonwebtoken'

import User from '@modules/users/infra/typeorm/entities/User'

import IUserRepository from '@modules/users/repositories/IUserRepository'

interface IRequest {
  email: string
  password: string
}

@injectable()
class AuthUserUseCases {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({
    email,
    password
  }: IRequest): Promise<User | undefined> {
    const user = await this.userRepository.findByEmail(email)

    return user
  }
}

export default AuthUserUseCases

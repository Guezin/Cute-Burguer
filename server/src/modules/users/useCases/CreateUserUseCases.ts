import { inject, injectable } from 'tsyringe'

import AppError from '@shared/errors/AppError'

import User from '@modules/users/infra/typeorm/entities/User'

import IUserRepository from '@modules/users/repositories/IUserRepository'
import IBcrypt from '@shared/infra/container/providers/Bcrypt/models/IBcryptProvider'

interface IRequest {
  name: string
  email: string
  password: string
  provider?: boolean
}

@injectable()
class CreateUserUseCases {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('Bcrypt')
    private bcrypt: IBcrypt
  ) {}

  public async execute({
    name,
    email,
    password,
    provider = true
  }: IRequest): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new AppError(
        'Sorry, there is already a user with this email. Try another!',
        401
      )
    }

    const passwordHash = await this.bcrypt.generateHash(password)

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      provider
    })

    return user
  }
}

export default CreateUserUseCases

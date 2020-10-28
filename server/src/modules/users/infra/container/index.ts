import { container } from 'tsyringe'

import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'
import IUserRepository from '@modules/users/repositories/IUserRepository'

import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository'
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository'

container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository
)

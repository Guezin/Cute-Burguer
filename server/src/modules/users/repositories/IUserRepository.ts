import User from '@modules/users/infra/typeorm/entities/User'

import ICreateUserDTO from '../dtos/ICreateUserDTO'

export default interface IUserRepository {
  create: (userData: ICreateUserDTO) => Promise<User>
  findById: (id: string) => Promise<User | undefined>
  findByEmail: (email: string) => Promise<User | undefined>
  save: (user: User) => Promise<void>
}

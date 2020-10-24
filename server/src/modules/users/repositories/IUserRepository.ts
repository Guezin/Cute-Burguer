import User from '@modules/users/infra/typeorm/entities/User'

import ICreateUserDTO from '../dtos/ICreateUserDTO'

export default interface IUserRepository {
  create(userData: ICreateUserDTO): Promise<User>
  findByEmail: (email: string) => Promise<User | undefined>
}

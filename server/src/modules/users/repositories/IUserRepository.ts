import User from '@modules/users/infra/typeorm/entities/User'

export default interface IUserRepository {
  findByEmail: (email: string) => Promise<User | undefined>
}

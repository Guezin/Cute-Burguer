import User from '@modules/users/infra/typeorm/entities/User'

interface IRenderProps {
  user: User
  token: string
}

interface IResponseRender {
  id: string
  provider: boolean
  name: string
  email: string
  token: string
}

export default {
  render({ user, token }: IRenderProps): IResponseRender {
    return {
      id: user.id,
      provider: user.provider,
      name: user.name,
      email: user.email,
      token
    }
  }
}

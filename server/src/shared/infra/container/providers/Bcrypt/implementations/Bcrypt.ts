import { hash as bcryptHash, compare } from 'bcrypt'

import IBcryptProvider from '../models/IBcryptProvider'

class Bcrypt implements IBcryptProvider {
  public async generateHash(payload: string): Promise<string> {
    const hash = await bcryptHash(payload, 8)

    return hash
  }

  public async compareHash(
    payload: string,
    encrypted: string
  ): Promise<boolean> {
    const isValid = await compare(payload, encrypted)

    return isValid
  }
}

export default Bcrypt

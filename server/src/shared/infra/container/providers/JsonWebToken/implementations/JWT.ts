import { sign, verify } from 'jsonwebtoken'

import AppError from '@shared/errors/AppError'
import authConfig from '@config/auth'

import IJsonWebTokenProvider from '../models/IJsonWebTokenProvider'

interface IDecoded {
  iat: number
  exp: number
  sub: string
}

class JWT implements IJsonWebTokenProvider {
  private secret: string | undefined
  private expiresIn: string

  constructor() {
    this.secret = authConfig.jwt.secret
    this.expiresIn = authConfig.jwt.expiresIn
  }

  public generateToken(user_id: string): string {
    if (!this.secret) {
      throw new AppError('Token secret is required for JWT')
    }

    const payload = sign({}, this.secret, {
      subject: user_id,
      expiresIn: this.expiresIn
    })

    return payload
  }

  public verifyToken(token: string): IDecoded {
    if (!this.secret) {
      throw new AppError('Token secret is required for JWT.')
    }

    try {
      const decoded = verify(token, this.secret)

      return decoded as IDecoded
    } catch {
      throw new AppError('Token JWT invalid!')
    }
  }
}

export default JWT

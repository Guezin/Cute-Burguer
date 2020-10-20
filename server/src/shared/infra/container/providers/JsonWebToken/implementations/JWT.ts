import { sign, verify } from 'jsonwebtoken'

import AppError from '@shared/errors/AppError'
import authConfig from '@config/auth'

import IJsonWebToken from '../models/IJsonWebToken'

class JWT implements IJsonWebToken {
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

  public verifyToken(token: string): boolean {
    if (!this.secret) {
      throw new AppError('Token secret is required for JWT')
    }

    try {
      verify(token, this.secret)

      return true
    } catch {
      return false
    }
  }
}

export default JWT

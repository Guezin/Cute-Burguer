import { Request, Response, NextFunction } from 'express'

import AppError from '@shared/errors/AppError'

import JsonWebToken from '@shared/infra/container/providers/JsonWebToken/implementations/JWT'

export default (request: Request, _: Response, next: NextFunction): void => {
  const authHeaders = request.headers.authorization

  if (!authHeaders) {
    throw new AppError(
      'It is necessary to inform the authentication TOKEN.',
      401
    )
  }

  const [, token] = authHeaders.split(' ')

  const jwt = new JsonWebToken()

  const { sub } = jwt.verifyToken(token)

  request.user = {
    id: sub
  }

  return next()
}

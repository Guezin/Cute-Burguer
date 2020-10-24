import { Request, Response, NextFunction } from 'express'

// import AppError from '@shared/errors/AppError'

export default (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const teste = request.headers.authorization
  console.log(teste)

  next()
}

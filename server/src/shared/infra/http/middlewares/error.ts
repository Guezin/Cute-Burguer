import { Request, Response, NextFunction } from 'express'

import AppError from '@shared/errors/AppError'

export default (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response => {
  if (error instanceof AppError) {
    return response
      .status(error.statusCode)
      .json({ messageOfError: error.message })
  }

  console.log(error)

  return response.status(500).json({ messageOfError: 'Internal Server Error' })
}

import 'reflect-metadata'
import 'dotenv/config'
import express, { Express, json } from 'express'
import cors from 'cors'

import '../typeorm/database/connection'
import '../container'

import Routes from './routes'

class Server {
  public readonly server: Express
  private PORT: string | number

  constructor() {
    this.server = express()
    this.PORT = process.env.PORT || 3333

    this.main()
  }

  middlewares() {
    this.server.use(json())
    this.server.use(cors())
  }

  routes() {
    this.server.use(Routes)
  }

  main() {
    this.middlewares()
    this.routes()

    this.server.listen(this.PORT, () =>
      console.log(`Server is running http://localhost:${this.PORT}`)
    )
  }
}

export default new Server().server

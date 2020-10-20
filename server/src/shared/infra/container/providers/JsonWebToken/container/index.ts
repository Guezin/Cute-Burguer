import { container } from 'tsyringe'

import JsonWebToken from '../implementations/JWT'
import IJsonWebToken from '../models/IJsonWebToken'

container.registerSingleton<IJsonWebToken>('JsonWebToken', JsonWebToken)

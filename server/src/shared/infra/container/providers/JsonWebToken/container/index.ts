import { container } from 'tsyringe'

import JsonWebToken from '../implementations/JWT'
import IJsonWebTokenProvider from '../models/IJsonWebTokenProvider'

container.registerSingleton<IJsonWebTokenProvider>('JsonWebToken', JsonWebToken)

import { container } from 'tsyringe'

import Bcrypt from '../implementations/Bcrypt'
import IBcryptProvider from '../models/IBcryptProvider'

container.registerSingleton<IBcryptProvider>('Bcrypt', Bcrypt)

import { container } from 'tsyringe'

import EtherealMail from '../implementations/EtherealMail'
import IEtherealMailProvider from '../models/IEtherealMailProvider'

container.registerSingleton<IEtherealMailProvider>('EtherealMail', EtherealMail)

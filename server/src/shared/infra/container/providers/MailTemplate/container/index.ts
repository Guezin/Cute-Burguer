import { container } from 'tsyringe'

import IMailTemplateProvider from '../models/IMailTemplateProvider'
import Handlebars from '../implementations/Handlebars'

container.registerSingleton<IMailTemplateProvider>('Handlebars', Handlebars)

import nodemailer, { Transporter } from 'nodemailer'
// import { injectable, inject } from 'tsyringe';

import IEtherealMailProvider from '../models/IEtherealMailProvider'
import ISendMailDTO from '../dtos/ISendMailDTO'

class EtherealMail implements IEtherealMailProvider {
  private client: Transporter

  constructor() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: process.env.APP_MAIL_USER,
        pass: process.env.APP_MAIL_PASS
      }
    })
    this.client = transporter
  }

  public async sendMail({ to, from, subject }: ISendMailDTO): Promise<void> {
    const message = await this.client.sendMail({
      from: {
        name: from?.name || 'Equipe Cute Burguer',
        address: from?.email || 'equipe@cuteburguer.com.br'
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      text: 'EMAIL ENVIADO'
    })

    console.log('Message sent: %s', message.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
  }
}

export default EtherealMail

import * as nodemailer from 'nodemailer'
import { BackendLogger } from '../../../logger/backendLogger'
import { FROM, FROM_PWD, HTML, REPLY_TO, SMTP_PROVIDER, SUBJECT } from './email.constants'

const logger = new BackendLogger('email.ts')

// Might throw a console error
const transporter = nodemailer.createTransport({
    host: SMTP_PROVIDER,
    port: 465,
    secure: true, // true for 465
    auth: {
        user: FROM,
        pass: FROM_PWD,
    },
})

export const sendEmailToSponsor = async (userEmail: string, sponsorEmail: string) => {
    const mailOptions = {
        from: FROM,
        cc: userEmail,
        replyTo: REPLY_TO,
        to: sponsorEmail,
        subject: SUBJECT,
        html: HTML({ userEmail }),
    }

    try {
        transporter.sendMail(mailOptions)
        logger.info('Email sent!')
    } catch (e) {
        logger.error('Email not sent, Error:' + e.toString())
        return e
    }
    return null
}

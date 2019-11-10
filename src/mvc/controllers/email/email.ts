import * as nodemailer from 'nodemailer'
import { BackendLogger } from '../../../logger/backendLogger'
import { FROM, FROM_PWD, HTML, KEVIN_MAIL, SMTP_PROVIDER, SUBJECT } from './email.constants'

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

/** This e-mail is sent when an user wants to become an tester. */
export const sendEmailOfNewTester = async (userMail: string, wantsNewsletter: boolean) => {
    const mailOptions = {
        from: FROM,
        replyTo: userMail,
        to: KEVIN_MAIL,
        subject: 'New tester request from ' + userMail,
        html: `New potential tester: <strong>${userMail}</strong>
            <p>Tester wants also to receive monthly newsletter: ${wantsNewsletter}</p>`,
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

export const sendEmailToUs = async (autorMail: string, autorName: string, subject: string, text: string) => {
    const mailOptions = {
        from: FROM,
        cc: autorMail,
        replyTo: autorMail,
        to: KEVIN_MAIL,
        subject,
        html: `<strong>E-Mail from ${autorName}:\n</strong>${text}`,
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

export const sendEmailToSponsor = async (userEmail: string, sponsorEmail: string) => {
    const mailOptions = {
        from: FROM,
        cc: userEmail,
        replyTo: KEVIN_MAIL,
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

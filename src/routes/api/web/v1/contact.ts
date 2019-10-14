import * as express from 'express'
import {sendEmailToUs} from '../../../../mvc/controllers/email/email'
import {ApiResult} from './ApiResult'

const router = express.Router()

router.route('/form').post(async (req, res) => {
    ApiResult.sendJson(res, await sendEmailToUs(req.body.autorMail, req.body.autorName, req.body.subject, req.body.text), null)
})

export = router

import * as express from 'express'
import { sendEmailOfNewTester } from '../../../../mvc/controllers/email/email'
import { ApiResult } from './ApiResult'

const router = express.Router()

router.route('/alpha_tester').post(async (req, res) => {
    ApiResult.sendJson(res, await sendEmailOfNewTester(req.body.userMail, req.body.wantsNewsletter), null)
})

export = router

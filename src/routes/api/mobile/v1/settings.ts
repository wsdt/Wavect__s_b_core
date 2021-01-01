import * as express from 'express'
import { Settings } from '../../../../mvc/models/mobile/Settings'
import { ApiResult } from './ApiResult'

const router = express.Router()

router.route('/:userId').get((req, res) => {
    Settings.findOne({ userId: req.params.userId }).exec((err: any, userSetting: any) => {
        ApiResult.sendJson(res, err, userSetting)
    })
})

router.route('/:userId').post((req, res) => {
    const settings = new Settings({
        userId: req.params.userId,
        email: req.body.email,
        hasAcceptedDataPrivacy: req.body.hasAcceptedDataPrivacy,
    })

    // Delete old settings TODO: Does not seem to work as expected (if not deleted the user cannot insert his email when it has been already used [as we curr use temp. generated userIds this is necessary)
    Settings.deleteOne({ email: req.body.email }, undefined, (err: any) => {
        if (err) {
            console.error(err)
        }
        console.log('settings:post: Tried to deleted old setting before inserting new one.')

        settings.save(err2 => {
            ApiResult.sendJson(res, [err, err2], null)
        })
    })
})

export = router

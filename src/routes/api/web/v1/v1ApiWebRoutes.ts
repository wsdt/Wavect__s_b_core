import * as express from 'express'
const router = express.Router()

import * as contact from './contact'
import * as subscription from './subscription'
router.use('/contact', contact)
router.use('/subscription', subscription)

export = router

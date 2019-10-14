import * as express from 'express'
const router = express.Router()

import * as contact from './contact'
router.use('/contact', contact)

export = router

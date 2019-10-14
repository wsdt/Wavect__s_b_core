import * as express from 'express'

const router = express.Router()

import * as webV1 from './v1/v1ApiWebRoutes'
router.use('/v1', webV1)

export = router

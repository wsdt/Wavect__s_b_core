import * as mongoose from 'mongoose'
import {DATABASE_URI} from '../../../app.constants'
import {BackendLogger} from '../../../logger/backendLogger'

const logger = new BackendLogger('db.ts')

export const establishDbConnection = async () => {
    // No need to create db here, as it is created automatically when inserting sth.
    // let dbo: Db = db.db(DB_NAME)

    /* NO NEED to create Collections as they are created when the first record
    is inserted and it did not exist before. */

    // no need for polly here as mongo supports reconnect natively
    try {
        await mongoose.connect(DATABASE_URI, {
            useNewUrlParser: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 60000, // retry every 60 seconds
        })

        logger.info('establishDbConnection: Established db connection successfully.')
        mongoose.connection.on('error', (err: Error) => {
            logger.error(`establishConnection: Db connection not working anymore. Database down?\n${JSON.stringify(err)}`)
        })
    } catch (e) {
        logger.error('establishDbConnection: Could not connect to mongodb.')
    }
}

// no need for callback functions as mongoose returns singletons etc. :)

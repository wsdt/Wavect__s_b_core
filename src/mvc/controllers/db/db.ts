import * as mongoose from "mongoose"
import { DATABASE_URI } from "../../../app.constants"
import { BackendLogger } from "../../../logger/backendLogger"

const logger = new BackendLogger("db.ts")

export const establishDbConnection = () => {
    // No need to create db here, as it is created automatically when inserting sth.
    // let dbo: Db = db.db(DB_NAME)

    /* NO NEED to create Collections as they are created when the first record
    is inserted and it did not exist before. */

    mongoose.connect(DATABASE_URI, { useNewUrlParser: true })
    const db: mongoose.Connection = mongoose.connection
    db.on("error", console.error.bind(console, "connection error:"))
    db.once("open", () => {
        logger.info("Established Database-Connection successfully!")
    })
}

// no need for callback functions as mongoose returns singletons etc. :)

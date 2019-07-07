const log = require("simple-node-logger")
const timestampFormat = "YYY-MM-DD HH:mm:ss.SSS"

class backendLogger {
    private filename: string
    private logger: any

    constructor(logfilePath: string) {
        this.filename = logfilePath

        const opts = {
            logFilePath: `../logFiles/${this.filename}.log`,
            timestampFormat: timestampFormat,
        }

        this.logger = log.createSimpleLogger(opts)
    }

    public info(msg: string) {
        this.logger.info(msg)
    }
    public warn(msg: string) {
        this.logger.warn(msg)
    }
    public fatal(msg: string) {
        this.logger.fatal(msg)
    }
    public debug(msg: string) {
        this.logger.debug(msg)
    }
    public error(msg: string) {
        this.logger.error(msg)
    }
    public trace(msg: string) {
        this.logger.trace(msg)
    }
}

const logger = new backendLogger("meinFile")
logger.fatal("FUCKING ERROR!")

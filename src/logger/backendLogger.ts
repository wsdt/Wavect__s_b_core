import * as path from 'path'

// tslint:disable-next-line:no-var-requires
const log = require('simple-node-logger')

const timestampFormat = 'YYY-MM-DD HH:mm:ss.SSS'

export class BackendLogger {
    private readonly filename: string
    private logger: any

    constructor(fileNameWithoutExtension: string) {
        this.filename = fileNameWithoutExtension

        const opts = {
            logFilePath: path.join(process.cwd(), 'logs', `${this.filename}.log`),
            timestampFormat,
        }

        this.logger = log.createSimpleLogger(opts)
    }

    public info(msg: string) {
        this.logger.info(msg)
        console.info(msg)
    }
    public warn(msg: string) {
        this.logger.warn(msg)
        console.warn(msg)
    }
    public fatal(msg: string) {
        this.logger.fatal(msg)
        console.error('FATAL - ' + msg)
    }
    public debug(msg: string) {
        this.logger.debug(msg)
        console.debug(msg)
    }
    public error(msg: string) {
        this.logger.error(msg)
        console.error(msg)
    }
    public trace(msg: string) {
        this.logger.trace(msg)
        console.trace(msg)
    }
}

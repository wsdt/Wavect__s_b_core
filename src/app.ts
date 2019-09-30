import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import * as helmet from 'helmet'
/**
 * Using spdy as http2 too, but not that fast as built-in module of node.JS.
 * But unfortunately, http2-module does not support express yet, so we have to
 * wait for express V5 to use http2 instead of spdy.
 */
import * as http from 'http'
import * as morgan from 'morgan'
import * as path from 'path'
import * as polly from 'polly-js'
import * as http2 from 'spdy'
import { CLIENT_WEB, HTTP2_OPTIONS, PORT, USE_HTTPS } from './app.constants'
import { graphqlRoot, graphqlSchema } from './graphql/graphql_queries'
import { BackendLogger } from './logger/backendLogger'
import { establishDbConnection } from './mvc/controllers/db/db'
import * as routes from './routes/routes'

// Set env variables
dotenv.config({ path: __dirname + '/./../secrets/globals.env' })

const logger: BackendLogger = new BackendLogger('app')

/**
 * Use HTTP 2, Server-Sent-Events and TSL.
 * HTTP 2 does not support non-encrypted connections
 * so backend is only accessible via HTTPS!
 *
 * No need to create separate HTTP 1.1 http2Server for
 * redirection, as this is not a frontend.
 */
class App {
    public app: express.Application
    public http2Server: http2.Server
    public http1Server: http.Server

    constructor() {
        this.app = express()
        this.http2Server = http2.createServer(HTTP2_OPTIONS, this.app)
        this.http1Server = http.createServer(this.app)
        this.config()
    }

    public runServer() {
        const server: http2.Server | http.Server = USE_HTTPS ? this.http2Server : this.http1Server

        // Retry if failed
        polly()
            .waitAndRetry(5)
            .executeForPromise(async () => {
                try {
                    logger.info(`runServer: Server listening on port ${PORT}`)
                    return Promise.resolve(await server.listen(PORT))
                } catch (e) {
                    logger.error(`runServer: Could not bind server to port ${PORT} -> ${JSON.stringify(e)}`)
                    return Promise.reject(e)
                }
            })
    }

    private config(): void {
        // support application/json type post data (might be needed later)
        this.app.use(bodyParser.json())

        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }))

        // Add cors header to be accessible from frontend
        this.app.use(
            cors({
                origin: CLIENT_WEB,
            })
        ) // TODO: Maybe cors blocks mobile requests!

        // graphql
        this.app.use(
            '/graphql',
            graphqlHTTP({
                graphiql: true,
                rootValue: graphqlRoot,
                schema: graphqlSchema,
            })
        )

        // db connection
        establishDbConnection()

        // Add routes (sse + rest api)
        this.app.use('/', routes)

        // Add static files (e.g. for images etc.)
        this.app.use('/files', express.static(path.join(__dirname, 'public')))

        // For additional security
        this.app.use(helmet())

        // Log http requests
        this.app.use(morgan('combined'))

        logger.info('app: Configuration done.')
    }
}

export default new App()

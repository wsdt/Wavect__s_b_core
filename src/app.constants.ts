import * as fs from 'fs'
import * as path from 'path'
import { DB_NAME } from './mvc/controllers/db/db.constants'

/** If false then http 1.1 is used. */
export const USE_HTTPS: boolean = false

/**
 * Determines on which port the application can be called. Please keep in mind that maybe other
 * applications (e.g. Frontend, db, ...) run on the same machine especially during development!
 */
export const PORT = process.env.PORT ? process.env.PORT : 8090

/**
 * Paths to http2Server certificate and private key for a secure TLS connection. But keep in mind
 * that the development secrets get pushed to Github (private repo).
 */
export const HTTP2_OPTIONS = {
    cert: fs.readFileSync(path.resolve(__dirname, '..', 'secrets', 'server-cert.pem')),
    key: fs.readFileSync(path.resolve(__dirname, '..', 'secrets', 'server-key.pem')), // TODO: später wrschl auch .pem datei für trust hierachy
}

/**
 * Used by CORS Header to only specifically allow access to our frontend accessing our services.
 */
export const CLIENT_WEB = ['http://localhost:8080', 'http://localhost:3000', 'https://wavect.io']

const getDatabaseUri = () => {
    if (process.env.DATABASE_USER && process.env.DATABASE_PWD) {
        return `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
    } else if (process.env.DATABASE_URI) {
        return `${process.env.DATABASE_URI}/${DB_NAME}`
    } else {
        return `mongodb://192.168.99.100:27017/${DB_NAME}` // try unauthenticated & local login if no env vars available
    }
}

export const DATABASE_URI = getDatabaseUri()

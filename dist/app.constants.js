"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var db_constants_1 = require("./mvc/controllers/db/db.constants");
exports.USE_HTTPS = false;
exports.PORT = process.env.PORT ? process.env.PORT : 8090;
exports.HTTP2_OPTIONS = {
    cert: fs.readFileSync(path.resolve(__dirname, "..", "secrets", "server-cert.pem")),
    key: fs.readFileSync(path.resolve(__dirname, "..", "secrets", "server-key.pem")),
};
exports.CLIENT_WEB = "https://localhost:8080";
exports.DATABASE_URI = (process.env.DATABASE_URI && process.env.DATABASE_NAME)
    ? process.env.DATABASE_URI + "/" + db_constants_1.DB_NAME : "mongodb://192.168.99.100:27017/" + db_constants_1.DB_NAME;
//# sourceMappingURL=app.constants.js.map
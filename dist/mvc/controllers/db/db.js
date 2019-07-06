"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var app_constants_1 = require("../../../app.constants");
exports.establishDbConnection = function () {
    mongoose.connect(app_constants_1.DATABASE_URI, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
        console.log("establishDbConnection: Db connection opened.");
    });
};
//# sourceMappingURL=db.js.map
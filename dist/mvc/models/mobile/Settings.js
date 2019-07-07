"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var db_constants_1 = require("../../controllers/db/db.constants");
var SettingsFields;
(function (SettingsFields) {
    SettingsFields["userId"] = "userId";
    SettingsFields["email"] = "email";
    SettingsFields["hasAcceptedDataPrivacy"] = "hasAcceptedDataPrivacy";
})(SettingsFields = exports.SettingsFields || (exports.SettingsFields = {}));
var SettingsModel = new mongoose.Schema((_a = {},
    _a[SettingsFields.userId] = { type: String, unique: true, required: true, dropDups: true },
    _a[SettingsFields.email] = { type: String, unique: true, required: true, dropDups: true },
    _a[SettingsFields.hasAcceptedDataPrivacy] = { type: Boolean, required: true },
    _a));
exports.Settings = mongoose.model(db_constants_1.COLLECTION_SETTINGS_NAME, SettingsModel);
//# sourceMappingURL=Settings.js.map
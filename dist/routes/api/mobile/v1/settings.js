"use strict";
var express = require("express");
var Settings_1 = require("../../../../mvc/models/mobile/Settings");
var ApiResult_1 = require("./ApiResult");
var router = express.Router();
router.route("/:userId").get(function (req, res) {
    Settings_1.Settings.findOne({ userId: req.params.userId }).exec(function (err, userSetting) {
        ApiResult_1.ApiResult.sendJson(res, err, userSetting);
    });
});
router.route("/:userId").post(function (req, res) {
    var settings = new Settings_1.Settings({
        userId: req.params.userId,
        email: req.body.email,
        hasAcceptedDataPrivacy: req.body.hasAcceptedDataPrivacy,
    });
    settings.save(function (err) {
        ApiResult_1.ApiResult.sendJson(res, err, null);
    });
});
module.exports = router;
//# sourceMappingURL=settings.js.map
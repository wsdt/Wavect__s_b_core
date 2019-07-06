"use strict";
var express = require("express");
var router = express.Router();
var settings = require("./settings");
router.use("/settings", settings);
var challenge = require("./challenge");
router.use("/challenge", challenge);
var email = require("./email");
router.use("/email", email);
module.exports = router;
//# sourceMappingURL=v1ApiMobileRoutes.js.map
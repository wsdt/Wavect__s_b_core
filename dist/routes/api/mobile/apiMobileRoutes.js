"use strict";
var express = require("express");
var router = express.Router();
var mobileV1 = require("./v1/v1ApiMobileRoutes");
router.use("/v1", mobileV1);
module.exports = router;
//# sourceMappingURL=apiMobileRoutes.js.map
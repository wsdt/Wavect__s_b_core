"use strict";
var express = require("express");
var Sponsor_1 = require("../../../../mvc/models/mobile/Sponsor");
var db_constants_1 = require(".././../../../mvc/controllers/db/db.constants");
var router = express.Router();
router.route("/current").get(function (_, res) {
    Sponsor_1.Sponsor.findOne({ sponsorID: db_constants_1.SPONSOR_CHALLENGE_CONSTANT }).exec(function (err, sponsor) {
        res.json({
            err: err,
            sponsor: sponsor,
        });
    });
});
router.route("/current").post(function (req, res) {
    var sponsor = new Sponsor_1.Sponsor({
        sponsorID: req.body.sponsorID,
        sponsorName: req.body.name,
        logoUri: req.body.logoUri.uri,
        shortDescr: req.body.shortDescr,
        sponsorWebsite: req.body.sponsorWebsite,
        sponsorEmail: req.body.sponsorEmail,
        sponsorYoutube: req.body.youtube,
        sponsorInstagram: req.body.instagram,
        sponsorFacebook: req.body.facebook,
        sponsorLinkedIn: req.body.linkedin
    });
    sponsor.save(function (err) {
        res.json({
            error: err,
        });
        if (err)
            return console.error(err + " --> " + sponsor);
    });
});
module.exports = router;
//# sourceMappingURL=sponsor.js.map
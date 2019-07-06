"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var db_constants_1 = require("../../controllers/db/db.constants");
var ApiResult_1 = require("../../../routes/api/mobile/v1/ApiResult");
var SponsorFields;
(function (SponsorFields) {
    SponsorFields["id"] = "id";
    SponsorFields["name"] = "name";
    SponsorFields["logoUri"] = "logoUri";
    SponsorFields["shortDescr"] = "shortDescr";
    SponsorFields["website"] = "website";
    SponsorFields["email"] = "email";
    SponsorFields["linkedin"] = "linkedin";
    SponsorFields["youtube"] = "youtube";
    SponsorFields["instagram"] = "instagram";
    SponsorFields["facebook"] = "facebook";
})(SponsorFields = exports.SponsorFields || (exports.SponsorFields = {}));
var SponsorModel = new mongoose.Schema((_a = {},
    _a[SponsorFields.id] = { type: String, unique: true, required: true, dropDups: true },
    _a[SponsorFields.name] = { type: String, required: true },
    _a[SponsorFields.logoUri] = { type: String, required: true, get: function (v) { return ({ uri: v }); }, set: function (v) { return v.uri; } },
    _a[SponsorFields.shortDescr] = { type: String, required: false },
    _a[SponsorFields.website] = { type: String, required: true },
    _a[SponsorFields.email] = { type: String, required: true },
    _a[SponsorFields.linkedin] = { type: String, required: false },
    _a[SponsorFields.youtube] = { type: String, required: false },
    _a[SponsorFields.instagram] = { type: String, required: false },
    _a[SponsorFields.facebook] = { type: String, required: false },
    _a));
SponsorModel.set("toObject", { getters: true });
SponsorModel.set("toJSON", { getters: true });
exports.sponsorToResponse = function (err, sponsor) {
    var _a;
    return new ApiResult_1.ApiResult(err, (_a = {},
        _a[SponsorFields.id] = sponsor.id,
        _a[SponsorFields.name] = sponsor.name,
        _a[SponsorFields.logoUri] = sponsor.logoUri,
        _a[SponsorFields.shortDescr] = sponsor.shortDescr,
        _a[SponsorFields.website] = sponsor.website,
        _a[SponsorFields.email] = sponsor.email,
        _a[SponsorFields.linkedin] = sponsor.linkedin,
        _a[SponsorFields.youtube] = sponsor.youtube,
        _a[SponsorFields.instagram] = sponsor.instagram,
        _a[SponsorFields.facebook] = sponsor.facebook,
        _a));
};
exports.Sponsor = mongoose.model(db_constants_1.COLLECTION_SPONSOR_NAME, SponsorModel);
//# sourceMappingURL=Sponsor.js.map
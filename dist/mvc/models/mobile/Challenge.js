"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ApiResult_1 = require("../../../routes/api/mobile/v1/ApiResult");
var db_constants_1 = require("../../controllers/db/db.constants");
var ChallengeCategory_1 = require("./ChallengeCategory");
var Sponsor_1 = require("./Sponsor");
var ChallengeFields;
(function (ChallengeFields) {
    ChallengeFields["id"] = "id";
    ChallengeFields["headline"] = "headline";
    ChallengeFields["subline"] = "subline";
    ChallengeFields["bgImage"] = "bgImage";
    ChallengeFields["whyDoesOrganizationSponsor"] = "whyDoesOrganizationSponsor";
    ChallengeFields["majorCategory"] = "majorCategory";
    ChallengeFields["sponsor"] = "sponsor";
    ChallengeFields["expirationInMs"] = "expirationInMs";
})(ChallengeFields = exports.ChallengeFields || (exports.ChallengeFields = {}));
var ChallengeModel = new mongoose.Schema((_a = {},
    _a[ChallengeFields.id] = { type: String, unique: true, required: true, dropDups: true },
    _a[ChallengeFields.headline] = { type: String, required: true },
    _a[ChallengeFields.subline] = { type: String, required: true },
    _a[ChallengeFields.bgImage] = { type: String, required: true, get: function (v) { return ({ uri: v }); }, set: function (v) { return v.uri; } },
    _a[ChallengeFields.whyDoesOrganizationSponsor] = { type: String, required: true },
    _a[ChallengeFields.majorCategory] = { type: ChallengeCategory_1.ChallengeCategory, required: true },
    _a[ChallengeFields.sponsor] = { type: Number, required: true },
    _a[ChallengeFields.expirationInMs] = { type: Number, required: true },
    _a));
ChallengeModel.set("toObject", { getters: true });
ChallengeModel.set("toJSON", { getters: true });
exports.challengeToResponse = function (err, challenge) { return __awaiter(_this, void 0, void 0, function () {
    var sponsor;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, Sponsor_1.Sponsor.findOne((_a = {}, _a[Sponsor_1.SponsorFields.id] = challenge.sponsor, _a)).exec()];
            case 1:
                sponsor = _c.sent();
                if (!sponsor) {
                    err = err.concat(["Sponsor with id " + challenge.sponsor + " not found"]);
                }
                return [2, new ApiResult_1.ApiResult(err, (_b = {},
                        _b[ChallengeFields.id] = challenge.id,
                        _b[ChallengeFields.headline] = challenge.headline,
                        _b[ChallengeFields.subline] = challenge.subline,
                        _b[ChallengeFields.bgImage] = challenge.bgImage,
                        _b[ChallengeFields.whyDoesOrganizationSponsor] = challenge.whyDoesOrganizationSponsor,
                        _b[ChallengeFields.majorCategory] = challenge.majorCategory,
                        _b[ChallengeFields.sponsor] = Sponsor_1.sponsorToResponse(err, sponsor).res,
                        _b[ChallengeFields.expirationInMs] = challenge.expirationInMs,
                        _b))];
        }
    });
}); };
exports.Challenge = mongoose.model(db_constants_1.COLLECTION_CHALLENGE_NAME, ChallengeModel);
//# sourceMappingURL=Challenge.js.map
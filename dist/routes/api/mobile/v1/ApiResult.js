"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiResult = (function () {
    function ApiResult(err, res) {
        var _this = this;
        this.sendJson = function (res) {
            res.json(_this.toJson());
        };
        this.toJson = function () {
            var result = {
                err: _this.err,
                res: _this.res,
            };
            console.log("ApiResult:toJson: Returning -> " + JSON.stringify(result));
            return result;
        };
        this.toString = function () {
            return JSON.stringify(_this.toJson());
        };
        this._err = err;
        this._res = res;
        if (err) {
            console.error("ApiResult:constructor: Received errors -> " + JSON.stringify(err));
        }
    }
    Object.defineProperty(ApiResult.prototype, "err", {
        get: function () {
            return this._err;
        },
        set: function (value) {
            this._err = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiResult.prototype, "res", {
        get: function () {
            return this._res;
        },
        set: function (value) {
            this._res = value;
        },
        enumerable: true,
        configurable: true
    });
    ApiResult.sendJson = function (resp, err, res) {
        new ApiResult(err, res).sendJson(resp);
    };
    return ApiResult;
}());
exports.ApiResult = ApiResult;
//# sourceMappingURL=ApiResult.js.map
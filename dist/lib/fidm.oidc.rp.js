"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FidmOidcRp = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var FidmOidcRp = /** @class */ (function () {
    function FidmOidcRp(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API registers and configures a new OP for the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.createOP+REST
     */
    FidmOidcRp.prototype.createOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.createOP', params);
    };
    /**
     * This API deletes the specified OP from the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.delOP+REST
     */
    FidmOidcRp.prototype.delOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.delOP', params);
    };
    /**
     * This API returns the configuration data for a specified OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOP+REST
     */
    FidmOidcRp.prototype.getOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.getOP', params);
    };
    /**
     * This API returns all the currently registered OPs for RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.getOPs+REST
     */
    FidmOidcRp.prototype.getOPs = function (params) {
        return this.gigya.request('fidm.oidc.rp.getOPs', params);
    };
    /**
     * This API updates the configuration of an existing OP  configured on the RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.rp.updateOP+REST
     */
    FidmOidcRp.prototype.updateOP = function (params) {
        return this.gigya.request('fidm.oidc.rp.updateOP', params);
    };
    return FidmOidcRp;
}());
exports.FidmOidcRp = FidmOidcRp;
exports.default = FidmOidcRp;
//# sourceMappingURL=fidm.oidc.rp.js.map
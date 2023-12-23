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
exports.RBA = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var RBA = /** @class */ (function () {
    function RBA(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API gets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.getPolicy
     */
    RBA.prototype.getPolicy = function (params) {
        return this.gigya.request('accounts.rba.getPolicy', params);
    };
    /**
     * This API sets the RBA (Risk-Based Authentication) policy for a site or master site of a group.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.setPolicy
     */
    RBA.prototype.setPolicy = function (params) {
        return this.gigya.request('accounts.rba.setPolicy', params);
    };
    /**
     * This API unlocks either the specified user's account or the specified IP, depending upon which parameters are passed.
     *
     * @see http://developers.gigya.com/display/GD/accounts.rba.unlock
     */
    RBA.prototype.unlock = function (params) {
        return this.gigya.request('accounts.rba.unlock', params);
    };
    return RBA;
}());
exports.RBA = RBA;
exports.default = RBA;
//# sourceMappingURL=rba.js.map
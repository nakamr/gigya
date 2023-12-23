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
exports.Webhooks = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var Webhooks = /** @class */ (function () {
    function Webhooks(gigya) {
        this.gigya = gigya;
    }
    /**
     * This method is used to delete a webhook.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.delete+REST
     */
    Webhooks.prototype.delete = function (params) {
        return this.gigya.request('accounts.webhooks.delete', params);
    };
    /**
     * This method is used to retrieve a list of all defined webhooks.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.getAll+REST
     */
    Webhooks.prototype.getAll = function (params) {
        return this.gigya.request('accounts.webhooks.getAll', params || {});
    };
    /**
     * This method is used to create a new webhook or update an existing one.
     *
     * @see http://developers.gigya.com/display/GD/accounts.webhooks.set+REST
     */
    Webhooks.prototype.set = function (params) {
        return this.gigya.request('accounts.webhooks.set', params);
    };
    return Webhooks;
}());
exports.Webhooks = Webhooks;
;
exports.default = Webhooks;
//# sourceMappingURL=accounts.webhooks.js.map
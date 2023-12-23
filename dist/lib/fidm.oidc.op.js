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
exports.FidmOidcOp = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var FidmOidcOp = /** @class */ (function () {
    function FidmOidcOp(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API deletes an existing OP configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.clearConfig+REST
     */
    FidmOidcOp.prototype.clearConfig = function (params) {
        return this.gigya.request('fidm.oidc.op.clearConfig', params);
    };
    /**
     * This API registers and configures a new RP for the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.createRP+REST
     */
    FidmOidcOp.prototype.createRP = function (params) {
        return this.gigya.request('fidm.oidc.op.createRP', params);
    };
    /**
     * This API deletes an existing OP configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.delRP+REST
     */
    FidmOidcOp.prototype.delRP = function (params) {
        return this.gigya.request('fidm.oidc.op.delRP', params);
    };
    /**
     * This API retrieves the site OP configuration relevant for all clients/relying-parties of the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getConfig+REST
     */
    FidmOidcOp.prototype.getConfig = function (params) {
        return this.gigya.request('fidm.oidc.op.getConfig', params);
    };
    /**
    * This API retrieves the site OP metadata.
    *
    * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getMetadata+REST
    */
    FidmOidcOp.prototype.getMetadata = function (params) {
        return this.gigya.request('fidm.oidc.op.getMetadata', params);
    };
    /**
     * This API returns the configuration data for a specified RP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getRP+REST
     */
    FidmOidcOp.prototype.getRP = function (params) {
        return this.gigya.request('fidm.oidc.op.getRP', params);
    };
    /**
     * This API Returns all the currently registered RPs for the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.getRPs+REST
     */
    FidmOidcOp.prototype.getRPs = function (params) {
        return this.gigya.request('fidm.oidc.op.getRPs', params);
    };
    /**
     * This API initiates the OP  functionality for your site. The configuration of the OP is relevant to all of the site's RPs.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.setConfig+REST
     */
    FidmOidcOp.prototype.setConfig = function (params) {
        return this.gigya.request('fidm.oidc.op.setConfig', params);
    };
    /**
     * This API updates the configuration of an existing RP  configured on the OP.
     *
     * @see http://developers.gigya.com/display/GD/fidm.oidc.op.updateRP+REST
     */
    FidmOidcOp.prototype.updateRP = function (params) {
        return this.gigya.request('fidm.oidc.op.updateRP', params);
    };
    return FidmOidcOp;
}());
exports.FidmOidcOp = FidmOidcOp;
exports.default = FidmOidcOp;
//# sourceMappingURL=fidm.oidc.op.js.map
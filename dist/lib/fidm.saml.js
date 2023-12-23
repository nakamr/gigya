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
exports.FidmSaml = void 0;
var fidm_saml_idp_1 = require("./fidm.saml.idp");
__exportStar(require("./fidm.saml.idp"), exports);
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
__exportStar(require("./interfaces/saml-config"), exports);
__exportStar(require("./interfaces/external-idp"), exports);
var FidmSaml = /** @class */ (function () {
    function FidmSaml(gigya) {
        this.gigya = gigya;
        this.idp = new fidm_saml_idp_1.default(gigya);
    }
    /**
     * This API deletes a SAML Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.delIdP+REST
     */
    FidmSaml.prototype.delIdP = function (params) {
        return this.gigya.request('fidm.saml.delIdP', params);
    };
    /**
     * This API retrieves the Gigya site configuration for SAML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getConfig+REST
     */
    FidmSaml.prototype.getConfig = function (params) {
        return this.gigya.request('fidm.saml.getConfig', params);
    };
    /**
     * This API retrieves all the SAML IdP configuration objects that are defined for the site.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.getRegisteredIdPs+REST
     */
    FidmSaml.prototype.getRegisteredIdPs = function (params) {
        return this.gigya.request('fidm.saml.getRegisteredIdPs', params);
    };
    /**
     * This API imports a SAML Identity Provider (IdP) configuration from a SAML metadata XML.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.importIdPMetadata+REST
     */
    FidmSaml.prototype.importIdPMetadata = function (params) {
        return this.gigya.request('fidm.saml.importIdPMetadata', params);
    };
    /**
     * This API updates or registers a SAML configuration for a specific Identity Provider (IdP).
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.registerIdP+REST
     */
    FidmSaml.prototype.registerIdP = function (params) {
        return this.gigya.request('fidm.saml.registerIdP', params);
    };
    /**
     * This API updates the Gigya SAML site configuration.
     *
     * @see http://developers.gigya.com/display/GD/fidm.saml.setConfig+REST
     */
    FidmSaml.prototype.setConfig = function (params) {
        return this.gigya.request('fidm.saml.setConfig', params);
    };
    return FidmSaml;
}());
exports.FidmSaml = FidmSaml;
exports.default = FidmSaml;
//# sourceMappingURL=fidm.saml.js.map
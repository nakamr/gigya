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
exports.Admin = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var Admin = /** @class */ (function () {
    function Admin(gigya) {
        this.gigya = gigya;
    }
    /**
     * This method creates a new site.
     *
     * @see http://developers.gigya.com/display/GD/admin.createSite+REST
     */
    Admin.prototype.createSite = function (params) {
        return this.gigya.request('admin.createSite', params);
    };
    /**
     * This API retrieves a partner's previously-saved ACL and its description, or a built-in ACL.
     *
     * @see http://developers.gigya.com/display/GD/admin.getACL+REST
     */
    Admin.prototype.getEffectiveACL = function (params) {
        return this.gigya.request('admin.getEffectiveACL', params);
    };
    /**
     * This API retrieves a specified partner's information.
     *
     * @see http://developers.gigya.com/display/GD/admin.getPartner+REST
     */
    Admin.prototype.getPartner = function (params) {
        return this.gigya.request('admin.getPartner', params);
    };
    /**
     * This API retrieves a partner's previously-saved ACL and its description, or a built-in ACL.
     *
     * @see http://developers.gigya.com/display/GD/admin.getACL+REST
     */
    Admin.prototype.getSiteConfig = function (params) {
        return this.gigya.request('admin.getSiteConfig', params);
    };
    /**
     * This API returns either all sites with which a user is associated by way of group memberships or all sites in a specific partner with which a user is associated.
     *
     * @see http://developers.gigya.com/display/GD/admin.getUserSites+REST
     */
    Admin.prototype.getUserSites = function (params) {
        return this.gigya.request('admin.getUserSites', params);
    };
    /**
     * This method searches the partner IDs, site IDs, base domains, and company names.
     *
     * @see http://developers.gigya.com/display/GD/admin.search+REST
     */
    Admin.prototype.search = function (params) {
        return this.gigya.request('admin.search', params);
    };
    /**
     * This method sets the configuration for existing sites.
     *
     * @see http://developers.gigya.com/display/GD/admin.setSiteConfig+REST
     */
    Admin.prototype.setSiteConfig = function (params) {
        return this.gigya.request('admin.setSiteConfig', params);
    };
    /**
     * This method deletes an exisiting site by API key
     *
     * @see http://developers.gigya.com/display/GD/admin.deleteSite+REST
     */
    Admin.prototype.deleteSite = function (params) {
        return this.gigya.request('admin.deleteSite', params);
    };
    /**
     * This method updates an exisiting partner by partnerID
     *
     * @see https://developers.gigya.com/display/GD/admin.updatePartner+REST
     */
    Admin.prototype.updatePartner = function (params) {
        return this.gigya.request('admin.updatePartner', params);
    };
    return Admin;
}());
exports.Admin = Admin;
;
exports.default = Admin;
//# sourceMappingURL=admin.js.map
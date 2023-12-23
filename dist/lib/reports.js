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
exports.Reports = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var Reports = /** @class */ (function () {
    function Reports(gigya) {
        this.gigya = gigya;
    }
    /**
     * This API retrieves Gigya's Accounts statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getAccountsStats+REST
     */
    Reports.prototype.getAccountsStats = function (params) {
        return this.gigya.request('reports.getAccountsStats', params);
    };
    /**
     * This API retrieves Gigya's comments statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getCommentsStats+REST
     */
    Reports.prototype.getCommentsStats = function (params) {
        return this.gigya.request('reports.getCommentsStats', params);
    };
    /**
     * This method retrieves the current total redeemable points across your user base, per challenge.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMRedeemablePoints+REST
     */
    Reports.prototype.getGMRedeemablePoints = function (params) {
        return this.gigya.request('reports.getGMRedeemablePoints', params);
    };
    /**
     * This API retrieves Gigya's Game Mechanics statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMStats+REST
     */
    Reports.prototype.getGMStats = function (params) {
        return this.gigya.request('reports.getGMStats', params);
    };
    /**
     * This API retrieves the top Game Mechanics users.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMTopUsers+REST
     */
    Reports.prototype.getGMTopUsers = function (params) {
        return this.gigya.request('reports.getGMTopUsers', params);
    };
    /**
     * This API retrieves the Gamification challenges and the number of users who participate in each challenge.
     *
     * @see http://developers.gigya.com/display/GD/reports.getGMUserStats+REST
     */
    Reports.prototype.getGMUserStats = function (params) {
        return this.gigya.request('reports.getGMUserStats', params);
    };
    /**
     * This API retrieves the top influencers for the site.
     *
     * @see http://developers.gigya.com/display/GD/reports.getIRank+REST
     */
    Reports.prototype.getIRank = function (params) {
        return this.gigya.request('reports.getIRank', params);
    };
    /**
     * This API retrieves Gigya's reactions statistics.
     *
     * @see http://developers.gigya.com/display/GD/reports.getReactionsStats+REST
     */
    Reports.prototype.getReactionsStats = function (params) {
        return this.gigya.request('reports.getReactionsStats', params);
    };
    /**
     * This API retrieves Gigya's reporting data.
     *
     * @see http://developers.gigya.com/display/GD/reports.getSocializeStats+REST
     */
    Reports.prototype.getSocializeStats = function (params) {
        return this.gigya.request('reports.getSocializeStats', params);
    };
    return Reports;
}());
exports.Reports = Reports;
exports.default = Reports;
//# sourceMappingURL=reports.js.map
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
exports.DS = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var DS = /** @class */ (function () {
    function DS(gigya) {
        this.gigya = gigya;
    }
    /**
     * Deletes object data or an entire object from Gigya's Data Store.
     *
     * @see http://developers.gigya.com/display/GD/ds.delete+REST
     */
    DS.prototype.delete = function (params) {
        return this.gigya.request('ds.delete', params);
    };
    /**
     * Retrieves an object's or the specified datum from Gigya's Data Store.
     *
     * @see http://developers.gigya.com/display/GD/ds.get+REST
     */
    DS.prototype.get = function (params) {
        return this.gigya.request('ds.get', params);
    };
    /**
     * This method retrieves the schema of a specified data type in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.getSchema+REST
     */
    DS.prototype.getSchema = function (params) {
        return this.gigya.request('ds.getSchema', params);
    };
    /**
     * Searches and retrieves data from Gigya's Data Store (DS) using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/ds.search+REST
     */
    DS.prototype.search = function (params) {
        return this.gigya.request('ds.search', params);
    };
    /**
     * This method allows specifying a schema for a data type in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.setSchema+REST
     */
    DS.prototype.setSchema = function (params) {
        return this.gigya.request('ds.setSchema', params);
    };
    /**
     * Stores an object data in Gigya's Data Store (DS).
     *
     * @see http://developers.gigya.com/display/GD/ds.store+REST
     */
    DS.prototype.store = function (params) {
        return this.gigya.request('ds.store', params);
    };
    return DS;
}());
exports.DS = DS;
exports.default = DS;
//# sourceMappingURL=ds.js.map
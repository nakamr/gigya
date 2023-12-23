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
exports.Audit = void 0;
__exportStar(require("./interfaces/gigya-response"), exports);
__exportStar(require("./interfaces/base-params"), exports);
var Audit = /** @class */ (function () {
    function Audit(gigya) {
        this.gigya = gigya;
    }
    /**
     * The method enables you to search your site's audit log using an SQL-like query.
     *
     * @see http://developers.gigya.com/display/GD/audit.search
     */
    Audit.prototype.search = function (params) {
        return this.gigya.request('audit.search', params);
    };
    return Audit;
}());
exports.Audit = Audit;
exports.default = Audit;
//# sourceMappingURL=audit.js.map
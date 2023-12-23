"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousRequestSigner = exports.isAnonymous = void 0;
function isAnonymous(credentials) {
    return credentials === false;
}
exports.isAnonymous = isAnonymous;
var AnonymousRequestSigner = /** @class */ (function () {
    function AnonymousRequestSigner() {
    }
    AnonymousRequestSigner.prototype.sign = function (request) { };
    return AnonymousRequestSigner;
}());
exports.AnonymousRequestSigner = AnonymousRequestSigner;
//# sourceMappingURL=AnonymousRequestSigner.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRequestSigner = exports.isSecretCredentials = void 0;
var AuthRequestSigner_1 = require("./AuthRequestSigner");
function isSecretCredentials(credentials) {
    return !!credentials.secret && (0, AuthRequestSigner_1.isCredentials)(credentials);
}
exports.isSecretCredentials = isSecretCredentials;
var SimpleRequestSigner = /** @class */ (function (_super) {
    __extends(SimpleRequestSigner, _super);
    function SimpleRequestSigner(_creds) {
        return _super.call(this, _creds) || this;
    }
    SimpleRequestSigner.prototype.sign = function (request) {
        // add credentials to sent params.
        request.params.userKey = this._creds.userKey;
        request.params.secret = this._creds.secret;
    };
    return SimpleRequestSigner;
}(AuthRequestSigner_1.AuthRequestSigner));
exports.SimpleRequestSigner = SimpleRequestSigner;
//# sourceMappingURL=SimpleRequestSigner.js.map
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
exports.AuthBearerSigner = exports.isRSACreds = void 0;
var AuthRequestSigner_1 = require("./AuthRequestSigner");
function isRSACreds(credentials) {
    return !!credentials.privateKey && (0, AuthRequestSigner_1.isCredentials)(credentials);
}
exports.isRSACreds = isRSACreds;
var AuthBearerSigner = /** @class */ (function (_super) {
    __extends(AuthBearerSigner, _super);
    function AuthBearerSigner(creds) {
        return _super.call(this, creds) || this;
    }
    AuthBearerSigner.prototype.sign = function (request) {
        var jwt = this.signJwt(this._creds);
        request.headers.Authorization = "Bearer ".concat(jwt);
        delete request.params.userKey;
        delete request.params.privateKey;
    };
    AuthBearerSigner.prototype.signJwt = function (creds) {
        var _a = require('jose'), JWT = _a.JWT, JWK = _a.JWK;
        return JWT.sign({}, JWK.asKey({
            key: creds.privateKey,
            format: 'pem',
            // type: 'pkcs1'
        }, {
            alg: 'RS256',
            kid: creds.userKey
        }), {
            iat: true,
            jti: this.createNonce().toString(),
            header: {
                typ: 'JWT'
            }
        });
    };
    return AuthBearerSigner;
}(AuthRequestSigner_1.AuthRequestSigner));
exports.AuthBearerSigner = AuthBearerSigner;
//# sourceMappingURL=AuthBearerSigner.js.map
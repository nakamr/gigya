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
exports.CredentialsSigner = void 0;
var SimpleRequestSigner_1 = require("./SimpleRequestSigner");
var strictUriEncode = require('strict-uri-encode');
var CredentialsSigner = /** @class */ (function (_super) {
    __extends(CredentialsSigner, _super);
    function CredentialsSigner(_sigUtils, creds, _httpMethod) {
        if (_httpMethod === void 0) { _httpMethod = 'post'; }
        var _this = _super.call(this, creds) || this;
        _this._sigUtils = _sigUtils;
        _this._httpMethod = _httpMethod;
        return _this;
    }
    CredentialsSigner.prototype.sign = function (request) {
        _super.prototype.sign.call(this, request);
        var requestParams = request.params;
        var effectiveSecret = requestParams.secret;
        // clear previous authentications
        delete requestParams.secret;
        delete requestParams.sig;
        if (effectiveSecret) {
            requestParams.timestamp = Date.now();
            requestParams.nonce = this.createNonce();
            requestParams.sig =
                this.createRequestSignature(this._creds.secret, "https://".concat(request.host.toLowerCase(), "/").concat(request.endpoint), requestParams);
        }
    };
    CredentialsSigner.prototype.createRequestSignature = function (secret, uri, requestParams) {
        var queryString = Object.keys(requestParams)
            .sort()
            .map(function (key) { return "".concat(key, "=").concat(strictUriEncode((requestParams[key] || '').toString())); })
            .join('&');
        var baseString = "".concat(this._httpMethod.toUpperCase(), "&").concat(strictUriEncode(uri), "&").concat(strictUriEncode(queryString));
        return this._sigUtils.calcSignature(baseString, secret);
    };
    return CredentialsSigner;
}(SimpleRequestSigner_1.SimpleRequestSigner));
exports.CredentialsSigner = CredentialsSigner;
//# sourceMappingURL=CredentialsSigner.js.map
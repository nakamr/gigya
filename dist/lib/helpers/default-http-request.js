"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRequest = exports.httpMethod = void 0;
var request = require("request");
var fs = require("fs");
var path = require("path");
var certificate;
var verboseHttpError = process.env['GIGYA_VERBOSE_HTTP_LOGGING'];
function getCertificate() {
    if (!certificate) {
        certificate = fs.readFileSync(path.join(__dirname, '../../../assets/cacert.pem')).toString();
    }
    return certificate;
}
function log(msg) {
    if (verboseHttpError) {
        console.log(msg);
    }
}
exports.httpMethod = 'post';
/**
 * Make HTTP request to Gigya.
 */
var httpRequest = function (endpoint, host, requestParams, headers) {
    var start = Date.now();
    return new Promise(function (resolve, reject) {
        var uri = "https://".concat(host, "/").concat(endpoint);
        request.post(uri, {
            method: exports.httpMethod,
            form: requestParams,
            ca: getCertificate(),
            headers: headers
        }, function (error, response, body) {
            log("request to ".concat(uri, " took ").concat((new Date().getTime() - start) / 1000, " seconds"));
            if (error) {
                log(error);
                reject(error);
            }
            try {
                resolve(JSON.parse(body));
            }
            catch (ex) {
                log("failed to parse response body from request to ".concat(uri, "\n").concat(body));
                reject(ex);
            }
        });
    });
};
exports.httpRequest = httpRequest;
exports.default = exports.httpRequest;
//# sourceMappingURL=default-http-request.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
/**
 * Resolve promise after sleeping for X ms.
 */
function sleep(ms) {
    return new Promise(function (resolve, reject) {
        if (ms === 0) {
            setImmediate(resolve);
        }
        else {
            setTimeout(function () { return resolve(); }, ms);
        }
    });
}
exports.sleep = sleep;
exports.default = sleep;
//# sourceMappingURL=sleep.js.map
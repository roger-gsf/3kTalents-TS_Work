"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cash = void 0;
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.pay = function (value) {
        console.log("Paid $".concat(value.toFixed(2), " in cash."));
    };
    return Cash;
}());
exports.Cash = Cash;

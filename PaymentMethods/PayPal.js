"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPal = void 0;
var PayPal = /** @class */ (function () {
    function PayPal() {
    }
    PayPal.prototype.pay = function (value) {
        console.log("Paid $".concat(value.toFixed(2), " with PayPal."));
    };
    return PayPal;
}());
exports.PayPal = PayPal;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCard = void 0;
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.pay = function (value) {
        console.log("Paid $".concat(value.toFixed(2), " with credit card."));
    };
    return CreditCard;
}());
exports.CreditCard = CreditCard;

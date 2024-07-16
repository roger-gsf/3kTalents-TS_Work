"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothe = void 0;
var Clothe = /** @class */ (function () {
    function Clothe(_name, type, price) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }
    Clothe.prototype.calculateTotalValue = function (totalValue, fee) {
        if (fee === void 0) { fee = 0.05; }
        return totalValue * (1 + fee);
    };
    return Clothe;
}());
exports.Clothe = Clothe;

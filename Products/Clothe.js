"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothe = void 0;
var Clothe = /** @class */ (function () {
    function Clothe(_name, type, price) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }
    Clothe.prototype.calculateTotalValue = function (totalValue) {
        return totalValue * 1.05;
    };
    return Clothe;
}());
exports.Clothe = Clothe;

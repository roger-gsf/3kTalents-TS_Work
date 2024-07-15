"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furniture = void 0;
var Furniture = /** @class */ (function () {
    function Furniture(_name, type, price) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }
    Furniture.prototype.calculateTotalValue = function (totalValue, fee) {
        if (fee === void 0) { fee = 0.10; }
        return totalValue * (1 + fee);
    };
    return Furniture;
}());
exports.Furniture = Furniture;

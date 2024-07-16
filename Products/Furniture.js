"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furniture = void 0;
var Furniture = /** @class */ (function () {
    function Furniture(_name, type, price) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }
    Furniture.prototype.calculateTotalValue = function (totalValue) {
        return totalValue * 1.10;
    };
    return Furniture;
}());
exports.Furniture = Furniture;

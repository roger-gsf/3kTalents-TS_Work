"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(_name, type, price, weight) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }
    Food.prototype.calculateTotalValue = function (totalValue) {
        return totalValue * 1.02;
    };
    return Food;
}());
exports.Food = Food;

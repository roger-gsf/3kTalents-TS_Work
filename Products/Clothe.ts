import { Products } from "./Products";

export class Clothe implements Products {
    _name: string;
    type: string;
    price: number;

    constructor(_name: string, type: string, price: number) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }

    calculateTotalValue(totalValue: number): number {
        return totalValue * 1.05;
    }
}

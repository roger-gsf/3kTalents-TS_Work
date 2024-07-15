import { Products } from "./Products";

export class Furniture implements Products {
    _name: string;
    type: string;
    price: number;

    constructor(_name: string, type: string, price: number) {
        this._name = _name;
        this.type = type;
        this.price = price;
    }

    calculateTotalValue(totalValue: number, fee: number = 0.10): number {
        return totalValue * (1 + fee);
    }
}

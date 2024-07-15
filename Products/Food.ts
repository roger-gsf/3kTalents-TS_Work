import { Products } from "./Products";

export class Food implements Products {
    _name: string;
    type: string;
    price: number;
    weight: number;

    constructor(_name: string, type: string, price: number, weight: number) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }



    calculateTotalValue(totalValue: number, fee: number = 0.02): number {
        return totalValue * (1 + fee);
    }
}
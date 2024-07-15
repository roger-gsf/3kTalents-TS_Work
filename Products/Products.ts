export interface Products {
    _name: string;
    type: string;
    price: number;

    calculateTotalValue(totalValue: number, fee?: number): number;
}

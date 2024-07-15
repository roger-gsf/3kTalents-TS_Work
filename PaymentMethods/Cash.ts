import { PaymentMethods } from "./PaymentMethods";

export class Cash implements PaymentMethods {
    public pay(value: number): void {
        console.log(`Paid $${value.toFixed(2)} in cash.`);
    }
}
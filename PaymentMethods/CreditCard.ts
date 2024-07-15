import { PaymentMethods } from "./PaymentMethods";

export class CreditCard implements PaymentMethods {
    public pay(value: number): void {
        console.log(`Paid $${value.toFixed(2)} with credit card.`);
    }
}
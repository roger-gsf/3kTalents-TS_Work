import { PaymentMethods } from "./PaymentMethods";

export class PayPal implements PaymentMethods {
    public pay(value: number): void {
        console.log(`Paid $${value.toFixed(2)} with PayPal.`);
    }
}
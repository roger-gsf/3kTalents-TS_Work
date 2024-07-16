import * as readlineSync from 'readline-sync';

import { Food } from "./Products/Food";
import { Clothe } from "./Products/Clothe";
import { Furniture } from "./Products/Furniture";
import { Products } from "./Products/Products";

import { PayPal } from './PaymentMethods/PayPal';
import { CreditCard } from './PaymentMethods/CreditCard';
import { Cash } from './PaymentMethods/Cash';

const products: Products[] = [
    new Food('Rice', 'Grain food', 20.00, 5),
    new Food('Bean', 'Grain food', 15.00, 2),
    new Clothe('T-shirt', 'Casual clothe', 70.00),
    new Clothe('Jeans', 'Denim clothe', 100.00),
    new Furniture('Sofa', 'Basic furniture', 1200.00),
    new Furniture('Table', 'Dining table', 800.00)
];

products.forEach(product => {
    product.price = product.calculateTotalValue(Number(product.price));
});

const payPal: PayPal = new PayPal();
const creditCard: CreditCard = new CreditCard();
const cash: Cash = new Cash();

let shoppingCart: Array<Products> = [];

let running: boolean = true;

console.log('Welcome to the Senac store!');

function menu(): void {
    console.log('1 - Buy product');
    console.log('2 - See shopping cart');
    console.log('3 - Pay');
    console.log('0 - Exit');

    let option: number = readlineSync.questionInt('Choose an option: ');

    switch (option) {
        case 1:
            console.clear();
            console.log('Product list:');
            products.forEach((product, index) => {
                console.log(`${index + 1} - ${product._name} - R$ ${product.price.toFixed(2)}`);
            });
            console.log(`Type 0 to back to menu.`);

            const selectedProduct: number = readlineSync.questionInt('Select product by code: ');
            buyProduct(selectedProduct);
            break;
        case 2:
            console.clear();
            seeShoppingCart();
            break;
        case 3:
            console.clear();
            pay();
            break;
        case 0:
            console.clear();
            console.log('Exiting...');
            running = false;
            break;
        default:
            console.clear();
            console.error('Invalid option!');
            callMenu();
            break;
    }
}

// Function to return to the menu after a determined time
function callMenu() {
    setTimeout(() => {
        console.clear();
        if (running) {
            menu();
        }
    }, 2500);
}

function buyProduct(productCode: number): void {
    if (productCode > 0 && productCode <= products.length) {
        const product = products[productCode - 1];
        shoppingCart.push(product);
        console.log(`${product._name} was added to the shopping cart.`);
    } else if (productCode === 0) {
        callMenu();
        return;
    } else {
        console.error('Invalid product code!');
    }
    callMenu();
}

function seeShoppingCart(): void {
    if (shoppingCart.length > 0) {
        console.log('Items in the shopping cart:');
        shoppingCart.forEach(item => {
            console.log(`- ${item._name} - R$ ${item.price}`);
        });
    } else {
        console.log('The shopping cart is empty!');
    }
    callMenu();
}

function pay(): void {
    if (shoppingCart.length > 0) {
        let totalValue = shoppingCart.reduce((total, product) => total + product.price, 0);
        console.log(`Total value: $${totalValue.toFixed(2)}`);
        console.log('Payment methods:');
        console.log('1 - PayPal');
        console.log('2 - Credit Card');
        console.log('3 - Cash');
        console.log('Type 0 to go back to menu');

        let paymentMethod: number = readlineSync.questionInt('Choose a payment method: ');

        switch (paymentMethod) {
            case 1:
                payPal.pay(totalValue);
                break;
            case 2:
                creditCard.pay(totalValue);
                break;
            case 3:
                cash.pay(totalValue);
                break;
            case 0:
                callMenu();
                return;
            default:
                console.error('Invalid payment method!');
                callMenu();
                return;
        }
        console.log('Payment done successfully!');
        shoppingCart = [];
    } else {
        console.error('You have nothing to pay.');
    }
    callMenu();
}

menu();

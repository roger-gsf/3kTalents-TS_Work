import * as readlineSync from 'readline-sync';

import { Food } from "./Products/Food";
import { Clothe } from "./Products/Clothe";
import { Furniture } from "./Products/Furniture";
import { Products } from "./Products/Products";

import { PayPal } from './PaymentMethods/PayPal';
import { CreditCard } from './PaymentMethods/CreditCard';
import { Cash } from './PaymentMethods/Cash';

const rice: Food = new Food('Rice', 'Grain food', 20.00, 5);
const bean: Food = new Food('Bean', 'Grain food', 15.00, 2);
const tShirt: Clothe = new Clothe('T-shirt', 'Casual clothe', 70.00);
const jeans: Clothe = new Clothe('Jeans', 'Denim clothe', 100.00);
const sofa: Furniture = new Furniture('Sofa', 'Basic furniture', 1200.00);
const table: Furniture = new Furniture('Table', 'Dining table', 800.00);

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
            console.log(`1 - ${rice._name} - ${rice.price}`);
            console.log(`2 - ${bean._name} - ${bean.price}`);
            console.log(`3 - ${tShirt._name}`);
            console.log(`4 - ${jeans._name}`);
            console.log(`5 - ${sofa._name}`);
            console.log(`6 - ${table._name}`);
            console.log(`0 - Back to menu`);
            

            const selectedProduct: number = readlineSync.questionInt('Select product by code: ');
            console.clear();
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
            console.log('Invalid option!');
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
    }, 3000);
}

function buyProduct(productCode: number): void {
    switch (productCode) {
        case 1:
            shoppingCart.push(rice);
            console.log(`${rice._name} was added in the shopping cart.`);
            break;
        case 2:
            shoppingCart.push(bean);
            console.log(`${bean._name} was added in the shopping cart.`);
            break;
        case 3:
            shoppingCart.push(tShirt);
            console.log(`${tShirt._name} was added in the shopping cart.`);
            break;
        case 4:
            shoppingCart.push(jeans);
            console.log(`${jeans._name} was added in the shopping cart.`);
            break;
        case 5:
            shoppingCart.push(sofa);
            console.log(`${sofa._name} was added in the shopping cart.`);
            break;
        case 6:
            shoppingCart.push(table);
            console.log(`${table._name} was added in the shopping cart.`);
            break;
        case 0:
            callMenu();
            break;
        default:
            console.log('Invalid product code!');
            callMenu();
            return;
    }
    callMenu();
}

function seeShoppingCart(): void {
    if (shoppingCart.length > 0) {
        console.log('Items in the shopping cart:');
        shoppingCart.forEach(item => {
            console.log(`- ${item._name}`);
        });
    } else {
        console.log(`The shopping cart is empty!`);
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
        console.log('0 - Back to menu');
        
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
                break;
            default:
                console.log('Invalid payment method!');
                callMenu();
                return;
        }
        console.log('Payment done successfully!');
        shoppingCart = [];
    } else {
        console.log(`You have nothing to pay.`);
    }
    callMenu();
}

menu();

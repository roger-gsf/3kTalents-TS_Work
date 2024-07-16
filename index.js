"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Food_1 = require("./Products/Food");
var Clothe_1 = require("./Products/Clothe");
var Furniture_1 = require("./Products/Furniture");
var PayPal_1 = require("./PaymentMethods/PayPal");
var CreditCard_1 = require("./PaymentMethods/CreditCard");
var Cash_1 = require("./PaymentMethods/Cash");
var products = [
    new Food_1.Food('Rice', 'Grain food', 20.00, 5),
    new Food_1.Food('Bean', 'Grain food', 15.00, 2),
    new Clothe_1.Clothe('T-shirt', 'Casual clothe', 70.00),
    new Clothe_1.Clothe('Jeans', 'Denim clothe', 100.00),
    new Furniture_1.Furniture('Sofa', 'Basic furniture', 1200.00),
    new Furniture_1.Furniture('Table', 'Dining table', 800.00)
];
products.forEach(function (product) {
    product.price = product.calculateTotalValue(Number(product.price));
});
var payPal = new PayPal_1.PayPal();
var creditCard = new CreditCard_1.CreditCard();
var cash = new Cash_1.Cash();
var shoppingCart = [];
var running = true;
console.log('Welcome to the Senac store!');
function menu() {
    console.log('1 - Buy product');
    console.log('2 - See shopping cart');
    console.log('3 - Pay');
    console.log('0 - Exit');
    var option = readlineSync.questionInt('Choose an option: ');
    switch (option) {
        case 1:
            console.clear();
            console.log('Product list:');
            products.forEach(function (product, index) {
                console.log("".concat(index + 1, " - ").concat(product._name, " - R$ ").concat(product.price.toFixed(2)));
            });
            console.log("Type 0 to back to menu.");
            var selectedProduct = readlineSync.questionInt('Select product by code: ');
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
    setTimeout(function () {
        console.clear();
        if (running) {
            menu();
        }
    }, 2500);
}
function buyProduct(productCode) {
    if (productCode > 0 && productCode <= products.length) {
        var product = products[productCode - 1];
        shoppingCart.push(product);
        console.log("".concat(product._name, " was added to the shopping cart."));
    }
    else if (productCode === 0) {
        callMenu();
        return;
    }
    else {
        console.error('Invalid product code!');
    }
    callMenu();
}
function seeShoppingCart() {
    if (shoppingCart.length > 0) {
        console.log('Items in the shopping cart:');
        shoppingCart.forEach(function (item) {
            console.log("- ".concat(item._name, " - R$ ").concat(item.price));
        });
    }
    else {
        console.log('The shopping cart is empty!');
    }
    callMenu();
}
function pay() {
    if (shoppingCart.length > 0) {
        var totalValue = shoppingCart.reduce(function (total, product) { return total + product.price; }, 0);
        console.log("Total value: $".concat(totalValue.toFixed(2)));
        console.log('Payment methods:');
        console.log('1 - PayPal');
        console.log('2 - Credit Card');
        console.log('3 - Cash');
        console.log('Type 0 to go back to menu');
        var paymentMethod = readlineSync.questionInt('Choose a payment method: ');
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
    }
    else {
        console.error('You have nothing to pay.');
    }
    callMenu();
}
menu();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Food_1 = require("./Products/Food");
var Clothe_1 = require("./Products/Clothe");
var Furniture_1 = require("./Products/Furniture");
var PayPal_1 = require("./PaymentMethods/PayPal");
var CreditCard_1 = require("./PaymentMethods/CreditCard");
var Cash_1 = require("./PaymentMethods/Cash");
var rice = new Food_1.Food('Rice', 'Grain food', 20.00, 5);
var bean = new Food_1.Food('Bean', 'Grain food', 15.00, 2);
var tShirt = new Clothe_1.Clothe('T-shirt', 'Casual clothe', 70.00);
var jeans = new Clothe_1.Clothe('Jeans', 'Denim clothe', 100.00);
var sofa = new Furniture_1.Furniture('Sofa', 'Basic furniture', 1200.00);
var table = new Furniture_1.Furniture('Table', 'Dining table', 800.00);
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
            console.log("1 - ".concat(rice._name, " - R$ ").concat(rice.price));
            console.log("2 - ".concat(bean._name, " - R$ ").concat(bean.price));
            console.log("3 - ".concat(tShirt._name, " - R$ ").concat(tShirt.price));
            console.log("4 - ".concat(jeans._name, " - R$ ").concat(jeans._name));
            console.log("5 - ".concat(sofa._name, " - R$ ").concat(sofa._name));
            console.log("6 - ".concat(table._name, " - R$ ").concat(table._name));
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
            console.log('Invalid option!');
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
    }, 3000);
}
function buyProduct(productCode) {
    switch (productCode) {
        case 1:
            shoppingCart.push(rice);
            console.log("".concat(rice._name, " was added in the shopping cart."));
            break;
        case 2:
            shoppingCart.push(bean);
            console.log("".concat(bean._name, " was added in the shopping cart."));
            break;
        case 3:
            shoppingCart.push(tShirt);
            console.log("".concat(tShirt._name, " was added in the shopping cart."));
            break;
        case 4:
            shoppingCart.push(jeans);
            console.log("".concat(jeans._name, " was added in the shopping cart."));
            break;
        case 5:
            shoppingCart.push(sofa);
            console.log("".concat(sofa._name, " was added in the shopping cart."));
            break;
        case 6:
            shoppingCart.push(table);
            console.log("".concat(table._name, " was added in the shopping cart."));
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
function seeShoppingCart() {
    if (shoppingCart.length > 0) {
        console.log('Items in the shopping cart:');
        shoppingCart.forEach(function (item) {
            console.log("- ".concat(item._name, " - R$ ").concat(item.price));
        });
    }
    else {
        console.log("The shopping cart is empty!");
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
        console.log('0 - Back to menu');
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
                break;
            default:
                console.log('Invalid payment method!');
                callMenu();
                return;
        }
        console.log('Payment done successfully!');
        shoppingCart = [];
    }
    else {
        console.log("You have nothing to pay.");
    }
    callMenu();
}
menu();

'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(){
    this.price *= 0.75;

}

let product1 = new Product('cellphone', 8000);
product1.make25PercentDiscount();
console.log(product1.price);
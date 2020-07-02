'use strict';


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount(){
        this.price *= 0.75;
    }
}

let product1 = new Product('cellphone', 8000);
product1.make25PercentDiscount();
console.log(product1.price);

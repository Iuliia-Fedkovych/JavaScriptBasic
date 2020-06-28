'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(Element){
    let new_price = Element.price * 0.85; /* я не меняю исходны массыв, а просто вывожу новую цену в консоль */
    console.log('нова цена для товара ' + Element.id + ' - ' + new_price);
});

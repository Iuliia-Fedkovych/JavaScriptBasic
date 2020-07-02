'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products.filter(function(element){
    if ("photos" in element){ /* отсекаем элементы в которых нет свойств photos */
        if (element.photos.length !== 0) { /* отсекаем элементы в которых есть свойство photos, но это пустой массиы */ 
            return element;
        }
    }
});

console.log(productsWithPhoto);

products.sort(function(a, b){
    return a.price - b.price;
});

console.log(products);

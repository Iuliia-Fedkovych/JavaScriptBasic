'use strict';

let buttons = document.querySelectorAll('.btn-buy');

buttons.forEach((element) => {
        element.addEventListener('click', function(event){
            let product = {
                id: event.srcElement.dataset.id,
                price: event.srcElement.dataset.price,
                name: event.srcElement.dataset.name,
            };
            basket.addProductToBasket(product);
        });
});

let basket = {
    products: {},
    
    addProductToBasket(product){
        this.addProduct(product);
        this.createLine(product);
    },
    
    addProduct(product){
        this.products[product.id]={
            price: product.price,
            name: product.name,
        }
    },
    
    createLine(product){
        let productLine = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="count">1</td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productLine);
    },
    
}
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
        this.addToBasket(product);
        this.updateTotalSum();
        this.addActionToRemoveBtn(product);
    },
    
    removeFromBasletListener(event){
        basket.removeFromBasket(event);
        basket.updateTotalSum();
    },
    
    removeFromBasket(event){
        let removeBtnID = event.target.dataset.id;
        if (this.products[removeBtnID].quantity > 1){
            this.products[removeBtnID].quantity--;
            this.renderQuantity(removeBtnID);
        }else{
            this.removeBasketLine(removeBtnID);
            this.removeFromProducts(removeBtnID);
        }
    },
    
    removeBasketLine(id){
        let productLine = document.querySelector(`.quantity[data-id="${id}"]`).parentElement;
        productLine.remove();
    },
    
    removeFromProducts(id){
        delete this.products[id];
    },
    
    addActionToRemoveBtn(product){
        let removeButton = document.querySelector(`.removeBtn[data-id="${product.id}"]`);
        removeButton.addEventListener('click', this.removeFromBasletListener);
    },
    
    
    addProduct(product){
        if (this.products[product.id] == undefined) {
            this.products[product.id]={
                price: product.price,
                name: product.name,
                quantity: 1
            }
        } else {
            this.products[product.id].quantity++;
        }
    },
    
    renderProductLine(product){
        let productLine = `
            <tr>
                <th scope="row">${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="quantity" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt removeBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productLine);
    },
    
    renderQuantity(id){
        let productQuantity = document.querySelector(`.quantity[data-id="${id}"]`);
        productQuantity.innerText = this.products[id].quantity;
    },
    
    addToBasket(product){
        if (this.products[product.id].quantity == 1) {
            this.renderProductLine(product)
        }
        else{
            this.renderQuantity(product.id);
        }
    },
    
    updateTotalSum(){
        let total_sum = 0;
        for (let product in this.products){
            total_sum += this.products[product].price * this.products[product].quantity;
        }
        let total = document.querySelector('.totalSum')
        total.innerText = total_sum;
    }
    
}
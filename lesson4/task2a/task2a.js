'use strict';

let button = document.querySelector('button');
let modal = document.getElementsByClassName('modal')[0];
let button_close = document.querySelector('span');

button.addEventListener('click', function(event){
    modal.classList.remove('modal-hidden');

})

button_close.addEventListener('click', function(event){
    modal.classList.add('modal-hidden');
})
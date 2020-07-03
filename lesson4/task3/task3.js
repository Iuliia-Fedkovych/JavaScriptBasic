'use strict';

let buttons = document.querySelectorAll('button');

buttons.forEach((element) => {
        element.addEventListener('click', displayDet);
});

function displayDet(event){
    let buttonText = event.target.textContent.trim();
    let det_text = event.target.parentNode.getElementsByClassName('details')[0];
    if (buttonText === 'Details'){
        event.target.textContent = 'Cancel';
        det_text.classList.remove('det-hidden')
        
    }else {
        event.target.textContent = 'Details';
        det_text.classList.add('det-hidden');

    }
}
'use strict';

let mainContainer = document.querySelector('div');
let alphabet = ['A','B','C','D','E','F', 'G','H'];
function generateBoard(){
    let alpha_line = `<div class = 'line'><div class="cell_num">   </div>`;
    alphabet.forEach(function(element){
        alpha_line += `<div class="cell_alpha">${element}</div>`
    })
    alpha_line += '</div>';
    mainContainer.insertAdjacentHTML("afterbegin", alpha_line);
    for (let i = 1; i<=8; i++ ){
        let line = `<div class = 'line'><div class="cell_num">${i}</div>`;
        for (let j = 1; j <=8; j++){
            if ((j+i) % 2 === 0) {
                line += `<div class="cell black"></div>`;
            }else{
                line += `<div class="cell white"></div>`;
            }
        }
        line += `<div class="cell_num">${i}</div></div>`;
        mainContainer.insertAdjacentHTML("afterbegin", line);

    }
    mainContainer.insertAdjacentHTML("afterbegin", alpha_line);

}

generateBoard();
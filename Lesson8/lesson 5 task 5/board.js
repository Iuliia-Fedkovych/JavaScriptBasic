'use strict';

class Board{
    constructor(){
        this.mainContainer = document.querySelector('div');
        this.alphabet = ['A','B','C','D','E','F', 'G','H'];
    }
    
    /**
     * прорисовывает шахматную доску.
     */
    renderBoard(){
        this.createAlphaLine();
        this.createCells();
        this.createAlphaLine();
    }
    
    /**
     * Создает линию буквенных координат.
     */
    createAlphaLine(){
        let alpha_line = `<div class = 'line'><div class="cell_num">   </div>`;
        this.alphabet.forEach(function(element){
            alpha_line += `<div class="cell_alpha">${element}</div>`
        })
        alpha_line += '</div>';
        this.mainContainer.insertAdjacentHTML("afterbegin", alpha_line);
    }
    
    /**
     * отрисовывает ячейки
     */
    createCells(){    
        for (let i = 1; i<=8; i++ ){
            let line = `<div class = 'line'><div class="cell_num">${i}</div>`;
            for (let j = 1; j <=8; j++){
                if ((j+i) % 2 === 0) {
                    line += `<div class="cell black" data-alpha="${this.alphabet[j-1]}" data-num="${i}"></div>`;
                }else{
                    line += `<div class="cell white" data-alpha="${this.alphabet[j-1]}" data-num="${i}"></div>`;
                }
            }
            line += `<div class="cell_num">${i}</div></div>`;
            this.mainContainer.insertAdjacentHTML("afterbegin", line);
        }
    }
}

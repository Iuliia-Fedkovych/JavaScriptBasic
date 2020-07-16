'use strict';

class Chess{
    constructor(){
        
    this.white_chess = [
        {name: 'king',
        code: '&#9812;',
        position:{
            alpha:'E',
            num: 1
        }},
        {name: 'queen',
        code: '&#9813;',
        position:{
            alpha:'D',
            num: 1
        }},
        {name: 'rook1',
        code: '&#9814;',
        position:{
            alpha:'A',
            num: 1
        }},
        {name: 'rook2',
        code: '&#9814;',
        position:{
            alpha:'H',
            num: 1
        }},
        {name: 'bishop1',
        code: '&#9815;',
        position:{
            alpha:'C',
            num: 1
        }},
        {name: 'bishop2',
        code: '&#9815;',
        position:{
            alpha:'F',
            num: 1
        }},
        {name: 'knight1',
        code: '&#9816;',
        position:{
            alpha:'B',
            num: 1
        }},
        {name: 'knight2',
        code: '&#9816;',
        position:{
            alpha:'G',
            num: 1
        }},
        {name: 'pawn1',
        code: '&#9817;',
        position:{
            alpha:'A',
            num: 2
        }},
        {name: 'pawn2',
        code: '&#9817;',
        position:{
            alpha:'B',
            num: 2
        }},
        {name: 'pawn3',
        code: '&#9817;',
        position:{
            alpha:'C',
            num: 2
        }},
        {name: 'pawn4',
        code: '&#9817;',
        position:{
            alpha:'D',
            num: 2
        }},
        {name: 'pawn5',
        code: '&#9817;',
        position:{
            alpha:'E',
            num: 2
        }},
        {name: 'pawn6',
        code: '&#9817;',
        position:{
            alpha:'F',
            num: 2
        }},
        {name: 'pawn7',
        code: '&#9817;',
        position:{
            alpha:'G',
            num: 2
        }},
        {name: 'pawn8',
        code: '&#9817;',
        position:{
            alpha:'H',
            num: 2
        }},
    ];


    this.black_chess = [
        {name: 'king',
        code: '&#9818;',
        position:{
            alpha:'E',
            num: 8
        }},
        {name: 'queen',
        code: '&#9819;',
        position:{
            alpha:'D',
            num: 8
        }},
        {name: 'rook1',
        code: '&#9820;',
        position:{
            alpha:'A',
            num: 8
        }},
        {name: 'rook2',
        code: '&#9820;',
        position:{
            alpha:'H',
            num: 8
        }},
        {name: 'bishop1',
        code: '&#9821;',
        position:{
            alpha:'C',
            num: 8
        }},
        {name: 'bishop2',
        code: '&#9821;',
        position:{
            alpha:'F',
            num: 8
        }},
        {name: 'knight1',
        code: '&#9822;',
        position:{
            alpha:'B',
            num: 8
        }},
        {name: 'knight2',
        code: '&#9822;',
        position:{
            alpha:'G',
            num: 8
        }},
        {name: 'pawn1',
        code: '&#9823;',
        position:{
            alpha:'A',
            num: 7
        }},
        {name: 'pawn2',
        code: '&#9823;',
        position:{
            alpha:'B',
            num: 7
        }},
        {name: 'pawn3',
        code: '&#9823;',
        position:{
            alpha:'C',
            num: 7
        }},
        {name: 'pawn4',
        code: '&#9823;',
        position:{
            alpha:'D',
            num: 7
        }},
        {name: 'pawn5',
        code: '&#9823;',
        position:{
            alpha:'E',
            num: 7
        }},
        {name: 'pawn6',
        code: '&#9823;',
        position:{
            alpha:'F',
            num: 7
        }},
        {name: 'pawn7',
        code: '&#9823;',
        position:{
            alpha:'G',
            num: 7
        }},
        {name: 'pawn8',
        code: '&#9823;',
        position:{
            alpha:'H',
            num: 7
        }},
    ];
    }
    
    /**
     * выставляет шахматную фигуру согласно ее позиции
     */
    renderChessByPosition(element){
        let pos_alpha = element.position.alpha;
        let pos_num = element.position.num;
        let pos_selector = `[data-alpha="${pos_alpha}"][data-num="${pos_num}"]`;
        let cell_for_chess = document.querySelector(pos_selector);
        let chess_img = `<div class="chess">${element.code}</div>`;
        cell_for_chess.insertAdjacentHTML('afterbegin', chess_img);
    }
    
    /**
     * Расставляет шахматы на их позиции
     */
    renderAllChess(){
        
        this.white_chess.forEach(this.renderChessByPosition);
        this.black_chess.forEach(this.renderChessByPosition);
    }
}

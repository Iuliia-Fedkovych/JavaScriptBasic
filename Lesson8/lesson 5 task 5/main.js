'use strict';


window.addEventListener('load', function() {
    let board = new Board();
    let chess = new Chess();

    board.renderBoard();
    chess.renderAllChess();
    
})
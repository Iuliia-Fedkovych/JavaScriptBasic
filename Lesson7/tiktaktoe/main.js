'use strict';

window.addEventListener('load', function() {
    let game = new Game();
    let board = new Board();
    let status = new Status();
    
    board.init(game, status);
    game.init(status, board);
    
    board.renderMap();
    board.initEventHandlers();
})
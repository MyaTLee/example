// Tic Tac Toe

/* 
X = X's, O's = turns???
X click event to input X or O
X preventing playing the same tile

X check for win
X game over/ 
???restart game
*/
let turn = true; // x = true, o = false
let tiles = document.querySelectorAll('.tile');
let tileTurns = []; // [true, false,,false,,,,true ]
let gameover = false;
let turns = 9;
let message = document.getElementById('message');
let reset = document.getElementById('reset');

reset.addEventListener('click', resetGame);

tiles.forEach((tile, idx) => { // 
    tile.addEventListener('click', () => {
        if (!gameover) {
            let empty = !tile.innerText;
            if(empty) {
                if (turn) {
                    tile.innerText = 'X';
                } else {
                    tile.innerText = 'O';
                }
                turns--; 
                tileTurns[idx] = turn;
                let win = checkWin(turn);
                if (win) {
                    gameover = true;
                    // if win output turn won!
                    if (turn) {
                        message.innerText = 'X Wins!!!';
                    } else {
                        message.innerText = 'O Wins!!!';
                    }
                } else if (turns == 0) {
                    message.innerText = 'Cat Game!!!';               
                } else {
                    // else change turn
                    turn = !turn;
                }
            }
        }
    });
});

function checkWin(turn) {
    let win = false;
    // horizontal
    if (tileTurns[0] == turn &&
        tileTurns[1] == turn &&
        tileTurns[2] == turn) {
        win = true;
    }
    if (tileTurns[3] == turn &&
        tileTurns[4] == turn &&
        tileTurns[5] == turn) {
        win = true;
    }
    if (tileTurns[6] == turn &&
        tileTurns[7] == turn &&
        tileTurns[8] == turn) {
        win = true;
    } 
    // vertical
    if (tileTurns[0] == turn &&
        tileTurns[3] == turn &&
        tileTurns[6] == turn) {
        win = true;
    }
    if (tileTurns[1] == turn &&
        tileTurns[4] == turn &&
        tileTurns[7] == turn) {
        win = true;
    }
    if (tileTurns[2] == turn &&
        tileTurns[5] == turn &&
        tileTurns[8] == turn) {
        win = true;
    }    
    // diagonal
    if (tileTurns[0] == turn &&
        tileTurns[4] == turn &&
        tileTurns[8] == turn) {
        win = true;
    }
    if (tileTurns[2] == turn &&
        tileTurns[4] == turn &&
        tileTurns[6] == turn) {
        win = true;
    }     
    return win;
}

function resetGame() {
    turn = true; // x = true, o = false
    tileTurns = [];
    gameover = false;
    turns = 9;
    message.innerText = '';
    tiles.forEach((tile) => {
        tile.innerText = '';
    });
}
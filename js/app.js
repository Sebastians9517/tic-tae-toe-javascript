/*-------------------------------- Constants --------------------------------*/

const winningCombinations = [
                ['0', '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['3', '4', '5'],
                ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['2', '4', '6']
];

/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let board;
let turn = 'X';
let win;


/*------------------------ Cached Element References ------------------------*/
// You might choose to put your game status here
let squares =  Array.from(document.querySelectorAll('#board div'));
let messages = document.querySelector('h2');

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('restart-button').addEventListener('click', start);

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up
// what the board will look like upon loading

function start() {
    messages.textContent = 'Welcome!'
    board = ['', '', '',
             '', '', '',
             '', '', '' ];
        render();
};
    start();

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function handleTurn(event) {
    let idx = squares.findIndex((square) => {
      return square === event.target;
    });
    if (board[idx]) {
        return
    };
    board[idx] = turn;
    if(turn === 'X') {
        turn = 'O'
    }
    else {turn = 'X'};

    win = winnerCheck();

    render();
};


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function winnerCheck() {
    let winner = null;
    winningCombinations.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] &&
            board[combo[0]] === board[combo[2]]) {
            winner = board[combo[0]];
            };
      });
        if (winner) {
            return winner;
        }
        else if (board.includes('')) {
            return null;
        }
        else {
            return 'Tie';
    };
};


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

// var confettiElement = document.getElementById('my-canvas');
// var confettiSettings = { target: confettiElement };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();

function render() {
    board.forEach((mark, index) => {
        squares[index].textContent = mark;
    });

    if ( win === 'Tie' ) {
        messages.textContent = `Cat's game! Try again!`
    }
    else if (win) {
        messages.textContent = `${win} wins the game!`

    }
    else {
        messages.textContent = `It's ${turn}'s turn!`
    };
};

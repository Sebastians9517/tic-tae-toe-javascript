/*-------------------------------- Constants --------------------------------*/
const colors = {
    '0': 'empty',
     '1': 'player1',
     '-1': 'player2'
};

// const spaces = ['0', '1', '2',
//                 '3', '4', '5',
//                 '6', '7', '8'];

const winningCombinations = [
                ['0', '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['3', '4', '5'],
                ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['2', '4', '6']
];


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let board;
let turn = 'X';
let winner;


/*------------------------ Cached Element References ------------------------*/
// You might choose to put your game status here
let squares =  Array.from(document.querySelectorAll('#board div'));
let messages = document.getElementById('message');

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('board').addEventListener('click', handleTurn);

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up
// what the board will look like upon loading

function init() {
    board = ['', '', '',
             '', '', '',
             '', '', '' ];
        render();
};
    init();

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function handleTurn(event) {
    let idx = squares.findIndex((square) => {
    return square === event.target;
    });
    board[idx] = turn;
    console.log(board);

    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'};
    winnerCheck();
    render();
};


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

function winnerCheck() {
    for(let i = 0; i < winningCombinations.length; i++){
    if (board[0] == board[1] && board[1] == board[2])
        return 1;
    else if (board[3] == board[4] && board[4] == board[5])
        return 1;
    else if (board[6] == board[7] && board[7] == board[8])
        return 1;
    else if (board[0] == board[3] && board[3] == board[6])
        return 1;
    else if (board[1] == board[4] && board[4] == board[7])
        return 1;
    else if (board[2] == board[5] && board[5] == board[8])
        return 1;
    else if (board[0] == board[4] && board[4] == board[8])
        return 1;
    else if (board[2] == board[4] && board[4] == board[6])
        return 1;
    else if ((board[1] != 'X' || board[1] == 'O') &&
             (board[2] != 'X' || board[2] == 'O') &&
             (board[3] != 'X' || board[3] == 'O') &&
             (board[4] != 'X' || board[4] == 'O') &&
             (board[5] != 'X' || board[5] == 'O') &&
             (board[6] != 'X' || board[6] == 'O') &&
             (board[7] != 'X' || board[7] == 'O') &&
             (board[8] != 'X' || board[8] == 'O') &&
             (board[9] != 'X' || board[9] == 'O')) {
             console.log('hi')
        return 0;}

    else
        return -1;
}}


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {
    board.forEach((mark, index) => {
    squares[index].textContent = mark;
    });
    messages.textContent = `Time for ${turn} to play`;
};

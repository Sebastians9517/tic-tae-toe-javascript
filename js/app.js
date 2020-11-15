/*-------------------------------- Constants --------------------------------*/
const colors = {
    '': 'empty',
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
let announcement = document.getElementById('message')
let spaces =  Array.from(document.querySelectorAll('#board div'));

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click
document.getElementById('board').addEventListener('click', play);

/*-------------------------------- Functions --------------------------------*/


// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up
// what the board will look like upon loading

function init() {
board = ['', '', '',
         '', '', '',
         '', '', ''];

    render();
};
init();

// On-Click function:
// Set up what happens when one of the elements
// is clicked
function play(event) {
    let index = spaces.findIndex((space) => {
        return spaces === event.target;
    });
    board[index] = turn;
    console.log(board)
};

// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

function render() {
    board.forEach((mark, index) => {
        console.log(mark, index)
        spaces[index].textContent = turn;
    });
};

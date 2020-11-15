/*-------------------------------- Constants --------------------------------*/
const colors = {
    'null': empty,
     '1': player1,
     '-1': player2
};

// const spaces = ['0', '1', '2',
//                  '3', '4', '5',
//                  '6', '7', '8'];

const winningCombinations = [
                ['0', '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['3', '4', '5'],
                ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['2', '4', '6']
];


/*---------------------------- Variables (state) ----------------------------*/

// Variables might include (board/turn/winner)
let boardArea, turn, winner;


/*------------------------ Cached Element References ------------------------*/
// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/

// This is where you should put the event listener
// for a mouse-click

/*-------------------------------- Functions --------------------------------*/
let boardArea = []
function start(){
boardArea = [null, null, null,
              null, null, null,
              null, null, null]
  console.log("Start!")
//   spaces.innerHTML = ""
}

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked



// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is

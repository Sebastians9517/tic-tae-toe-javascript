
const winningCombinations = [
                ['0', '1', '2'], ['0', '4', '8'], ['0', '3', '6'], ['3', '4', '5'],
                ['6', '7', '8'], ['1', '4', '7'], ['2', '5', '8'], ['2', '4', '6']
];

let board;
let turn = '🗿';
let win;

let squares =  Array.from(document.querySelectorAll('#board div'));
let messages = document.querySelector('h2');


document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('restart-button').addEventListener('click', start);

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

function start() {
    messages.textContent = 'Welcome!'
    board = ['', '', '',
             '', '', '',
             '', '', '' ];
        render();
};
    start();


function handleTurn(event) {
    let idx = squares.findIndex((square) => {
      return square === event.target;
    });
    if (board[idx]) {
        return
    };
    board[idx] = turn;
    if(turn === '🗿') {
        turn = '🐱‍👓'
    }
    else {turn = '🗿'};

    win = winnerCheck();

    render();
};


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



function render() {
    board.forEach((mark, index) => {
        squares[index].textContent = mark;
    });

    if ( win === 'Tie' ) {
        board.forEach((mark, index) => {
            squares[index].textContent = "👽";
        messages.textContent = `The aliens win. Say goodbye to your crops (and your cattle).`;
    })}
    else if (win) {
        messages.textContent = `${win} wins the game!`;
    }
    else {
        messages.textContent = `It's ${turn}'s turn!`;
    };
};

// Fixed element selection
const playersResults = document.getElementById("players-results");
const grid = document.getElementsByClassName("grid");
const squares = document.getElementsByClassName("square");

// Game variables
let players = {};
let currentPlayer = "";
let oppoPlayer = "";
let gameStart = false;


// What set neds to be counted as a win
const winningSets = [
  
];

function checkWin() {
  for (let i = 0; i < winningSquares.length; i++) {
    let set = winningSets[i];

    if (
      squares[set[0]].innerText === currentPlayer &&
      squares[set[1]].innerText === currentPlayer &&
      squares[set[2]].innerText === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function isDraw() {
  for (let i = 0; i <= squares.length; i++) {
      if (squares[i].innerText !== "") {
        return true;
      }
  }
  return false;
}

 if (checkWin()) {
    message.innerText = players[currentPlayer] + " wins!";
    message.innerText = players[oppoPlayer] + "loses!";
    gameStart = false;
    return;
  }



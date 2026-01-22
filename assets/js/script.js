// Fixed element selection
const playersResults = document.getElementById("players-results");
const grid = document.getElementsByClassName("grid");
const squares = document.getElementsByClassName("square");
const markers = ["X", "O"];

// Game variables
let players = {};
let currentPlayer = "";
let oppoPlayer = "";
let gameStart = false;


// What set neds to be counted as a win
const winningSets = [
  
];

// Check if winning set is matched
function checkWin() {
  for (let i = 0; i < winningSets.length; i++) {
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
// Check if this function is matched with filling up all squares
function isDraw() {
  for (let i = 0; i <= squares.length; i++) {
      if (squares[i].innerText !== "") {
        return true;
      }
  }
  return false;
}

// Start game clicking button function
function startGame(){

  const p1 = document.getElementById("player-one");
  const p2 = document.getElementById("player-two");

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].onclick = function () {
      squareClick(i);
    };
  }

  function squareClick(index){
    if (!gameStart || squares[index].innerText === "")return;
  
    squares[index].innerText = currentPlayer;


   if (checkWin()) {
    playersResults.innerText = players[currentPlayer] + " wins!";
    playersResults.innerText = players[oppoPlayer] + "loses!";
    gameStart = false;
    return;
  }

  if (isDraw()) {
    playersResults.innerText = "It's a draw!!!";
    gameStart = false;
    return
    }
  }

  function choose(){
    let random = Math.random()*2
    if (random>1)
      currentPlayer = "X";
      oppoPlayer = "O";
  }else {
    currentPlayer = "O";
    oppoPlayer = "X";
  }

  if (currentPlayer || oppoPlayer = "X"){
    gameStart = true;
    grid.style.display = "grid";
}

function resetGame(){
  gameStart = false;
  playersResults.innerText = "";
  grid.style.display = "none";
}
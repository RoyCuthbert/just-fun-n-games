// Fixed element selection
const playersResults = document.getElementById("players-results");
const grid = document.getElementsByClassName("grid")[0];
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
  for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerText !== "") {
        return false;
      }
  }
  return true;
}

// Start game clicking button function
function startGame(){

  const p1 = document.getElementById("player-one").value;
  const p2 = document.getElementById("player-two").value;

  players.markers[0] = p1;
  players.markers[1] = p2;

choose();
playersResults.innerText = players[currentPlayer] + "It's your turn!";
  function squareClick(index){
    if (!gameStart || squares[index].innerText !== "")return;
  
    squares[index].innerText = currentPlayer;


   if (checkWin()) {
    playersResults.innerText = 
    players[currentPlayer] + " wins!" + 
    players[oppoPlayer] + "loses!";
    gameStart = false;
    return;
  }

  if (isDraw()) {
    playersResults.innerText = "It's a draw!!!";
    gameStart = false;
    return
    }
  }

// Source - https://stackoverflow.com/a
// Posted by arkeros, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-22, License - CC BY-SA 4.0
// Edited to fit in line with what i needed to be displayed
function choose(){
if(Math.random() > 0.5) {
  currentPlayer = "X";
  oppoPlayer = "O";
}else {
  currentPlayer = "O";
  oppoPlayer = "X";
}

[currentPlayer, oppoPlayer] = [oppoPlayer, currentPlayer];
playersResults.innerText = players[currentPlayer] + "It's your turn!";

gameStart = true;
grid.style.display = "grid";



  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].onclick = function () {
      squareClick(i);
    };
  }

  
function resetGame(){
  gameStart = false;
  playersResults.innerText = "";
  grid.style.display = "none";
}

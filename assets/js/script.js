// Fixed element selection
const playersResults = document.getElementById("players-results");
const grid = document.getElementsByClassName("grid")[0];
const squares = document.getElementsByClassName("square");

// Game variables that change
let players = {};
let currentPlayer = "";
let oppoPlayer = "";
let gameStart = false;


// What set needs to be counted as a win
const winningSets = [
  
];
// Random player approach
// Source - https://stackoverflow.com/a
// Posted by arkeros, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-22, License - CC BY-SA 4.0
// Edited to fit in line with what i needed to be displayed
function choosePlayer() {
  if(Math.random() > 0.5) {
    currentPlayer = "X";
    oppoPlayer = "O";
  } else {
    currentPlayer = "O";
    oppoPlayer = "X";
  }
}

function switchingPlayers() {
  if (currentPlayer === "X"){
    currentPlayer = "O";
    oppoPlayer = "X";
  } else {
    currentPlayer = "X";
    oppoPlayer = "O";
  }
}

// Start game clicking button function
function startGame(){
  const p1 = document.getElementById("player-one").value || "Player 1";
  const p2 = document.getElementById("player-two").value || "Player 2";

  players["X"] = p1;
  players["O"] = p2;

  choosePlayer();
  gameStart = true;
  grid.style.display = "grid";
  playersResults.innerText = players[currentPlayer] + " it's your turn!";
  
   
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].onclick = function () {
      squareClick(i); 
    };
  }
}
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
    return;
    }

  switchingPlayers();
  
  playersResults.innerText = players[currentPlayer] + " it's your turn!";
  }
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
  
function resetGame(){
  gameStart = false;
  playersResults.innerText = "";
  grid.style.display = "none";

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

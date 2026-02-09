// Game Nought and Crosses Javascript
// Fixed element selection
const playersResults = document.getElementById("players-results");
const playerWin = document.getElementById("player-win");
const playerLoss = document.getElementById("player-loss");
const grid = document.getElementsByClassName("grid")[0];
const squares = document.getElementsByClassName("square");



// Game variables that change
let players = {};
let currentPlayer = "";
let oppoPlayer = "";
let gameStart = false;

// What set needs to be counted as a win
const winningSets = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Random player approach
// Source - https://stackoverflow.com/a
// Posted by arkeros, modified by community.
//  See post 'Timeline' for change history
// Retrieved 2026-01-22, License - CC BY-SA 4.0
// Edited to fit in line with what i needed to be displayed
function choosePlayer() {
  if (Math.random() > 0.5) {
    currentPlayer = "X";
    oppoPlayer = "O";
  } else {
    currentPlayer = "O";
    oppoPlayer = "X";
  }
}
// Switching players
function switchingPlayers() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
    oppoPlayer = "X";
  } else {
    currentPlayer = "X";
    oppoPlayer = "O";
  }
}

// Start game clicking button function
function startGame() {
  const p1 = document.getElementById("player-one").value || "Player 1";
  const p2 = document.getElementById("player-two").value || "Player 2";

  players.X = p1;
  players.O = p2;

  choosePlayer();
  gameStart = true;
  // Providing a grid to be more responsive when clicking start game button
  grid.style.display = "grid";
  playersResults.innerText = players[currentPlayer] + " it's your turn!";
  playerWin.innerText = "";
  playerLoss.innerText = "";

  const handleClick = index => () => squareClick(index);


  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].onclick = handleClick(i);
    }
  }

// Function to allow buttons to work as clicks and to add some if statements
function squareClick(index) {
  if (!gameStart || squares[index].innerText !== "") return;

  squares[index].innerText = currentPlayer;
  squares[index].classList.remove("crosses");
  squares[index].classList.remove("noughts");
  if (currentPlayer === "X") {
    squares[index].classList.add("crosses");
  } else {
    squares[index].classList.add("noughts");
  }

  // What neeed to be displayed if someone wins
  if (checkWin()) {
    playerWin.innerText =
      players[currentPlayer] + " wins!";
    playerLoss.innerText =
      players[oppoPlayer] + " loses!";
    playersResults.innerText = "";
    gameStart = false;
    return;
  }
  // What is displayed when game is a draw
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
// When checking this nothing appears to come up with a draw
function isDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].innerText === "") {
      return false;
    }
  }
  return true;
}
// Function resets game allowing all written information to be wiped
function resetGame() {
  gameStart = false;
  playersResults.innerText = "";
  playerWin.innerText = "";
  playerLoss.innerText = "";
  grid.style.display = "none";

  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].classList.remove("noughts", "crosses");
  }
}
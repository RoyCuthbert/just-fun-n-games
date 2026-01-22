// Fixed element selection
const playersResults = document.getElementById("players-results");
const grid = document.getElementsByClassName("grid")[0];
const squares = document.getElementsByClassName("square");

// Create message display
const message = document.createElement("p");
playersResults.appendChild(message);

// Winning combinations
const winningSquares = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// Game variables
let players = {};
let currentPlayer = "";
let gameStart = false;

function startGame() {
  const player1 = document.getElementById("player-one").value || "Player 1";
  const player2 = document.getElementById("player-two").value || "Player 2";

  // Random X / O
  if (Math.random() < 0.5) {
    players.X = player1;
    players.O = player2;
  } else {
    players.X = player2;
    players.O = player1;
  }

  currentPlayer = "X";
  gameStart = true;
  grid.style.display = "grid";

  // Clear board and add clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].onclick = function () {
      squareClicked(i);
    };
  }

  message.innerText = players[currentPlayer] + " (X) starts";
}

function squareClicked(index) {
  if (!gameStart || squares[index].innerText !== "") return;

  squares[index].innerText = currentPlayer;

  if (checkWin()) {
    message.innerText = players[currentPlayer] + " wins!";
    gameStart = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  message.innerText = players[currentPlayer] + "'s turn (" + currentPlayer + ")";
}

function checkWin() {
  for (let i = 0; i < winningSquares.length; i++) {
    let combo = winningSquares[i];

    if (
      squares[combo[0]].innerText === currentPlayer &&
      squares[combo[1]].innerText === currentPlayer &&
      squares[combo[2]].innerText === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameStart = false;
  message.innerText = "";
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  }
}

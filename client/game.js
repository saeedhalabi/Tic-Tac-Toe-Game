// Game mechanics
let currentPlayer = "X";
let playerTurnDisplay = document.getElementById("turn-text");
let player1ScoreDisplay = document.getElementById("player1-score");
let player2ScoreDisplay = document.getElementById("player2-score");
let winText = document.getElementById("win-text");
let restartBtn = document.getElementById("restart");

// track players scores
let player1Score = 0;
let player2Score = 0;

function cellClick(button) {
  if (button.innerHTML === "") {
    button.innerHTML = currentPlayer;
  }
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  // check for turns
  if (currentPlayer === "X") {
    playerTurnDisplay.innerHTML = "X's turn";
  } else if (currentPlayer === "O") {
    playerTurnDisplay.innerHTML = "O's Turn";
  }
}

function checkWinner() {}

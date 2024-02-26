// Game mechanics
// DOM elements
let playerTurnDisplay = document.getElementById("turn-text");
let player1ScoreDisplay = document.getElementById("player1-score");
let player2ScoreDisplay = document.getElementById("player2-score");
let winText = document.getElementById("win-text");

// initialize player scores
let player1Score = 0;
let player2Score = 0;

let board = [];
function checkWinner() {
  // boolean to check if winner is found
  let winnerFound = false;
  let draw = true;

  // Go through each square on the board to see what symbol (X or O) is in it and store it in the board array
  for (let i = 0; i < 9; i++) {
    // Record the symbol (X or O) in each square on the board
    board[i] = document.getElementById("button" + i).innerHTML;
    // check if any square is empty
    if (board[i] == "") {
      draw = false;
    }
  }
  // check for a draw
  if (draw) {
    winText.innerHTML = "It's a draw!";
    winText.style.color = "#ff6b6b";
    winText.style.fontWeight = "bold";
    disableButtons();
    return;
  }
  // rows
  // Check if the first row has the same symbol and is not empty
  if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
    document.getElementById("button" + 0).style.background = "#614385";
    document.getElementById("button" + 1).style.background = "#614385";
    document.getElementById("button" + 2).style.background = "#614385";

    displayWinner(board[0]);
    winnerFound = true;
    updateScore(board[0]);
  } else if (board[3] == board[4] && board[4] == board[5] && board[3] != "") {
    document.getElementById("button" + 3).style.background = "#614385";
    document.getElementById("button" + 4).style.background = "#614385";
    document.getElementById("button" + 5).style.background = "#614385";
    displayWinner(board[3]);
    winnerFound = true;
    updateScore(board[3]);
  } else if (board[6] == board[7] && board[7] == board[8] && board[6] != "") {
    document.getElementById("button" + 6).style.background = "#614385";
    document.getElementById("button" + 7).style.background = "#614385";
    document.getElementById("button" + 8).style.background = "#614385";
    displayWinner(board[6]);
    winnerFound = true;
    updateScore(board[6]);
  }

  // columns
  // Check if the first column has the same symbol and is not empty
  if (board[0] == board[3] && board[3] == board[6] && board[0] != "") {
    document.getElementById("button" + 0).style.background = "#614385";
    document.getElementById("button" + 3).style.background = "#614385";
    document.getElementById("button" + 6).style.background = "#614385";
    displayWinner(board[0]);
    winnerFound = true;
    updateScore(board[0]);
  } else if (board[1] == board[4] && board[4] == board[7] && board[1] != "") {
    document.getElementById("button" + 1).style.background = "#614385";
    document.getElementById("button" + 4).style.background = "#614385";
    document.getElementById("button" + 7).style.background = "#614385";
    displayWinner(board[1]);
    winnerFound = true;
    updateScore(board[1]);
  } else if (board[2] == board[5] && board[5] == board[8] && board[2] != "") {
    document.getElementById("button" + 2).style.background = "#614385";
    document.getElementById("button" + 5).style.background = "#614385";
    document.getElementById("button" + 8).style.background = "#614385";
    displayWinner(board[2]);
    winnerFound = true;
    updateScore(board[2]);
  }

  // Diagonals
  // check if the diagonals match
  if (board[0] == board[4] && board[4] == board[8] && board[0] != "") {
    document.getElementById("button" + 0).style.background = "#614385";
    document.getElementById("button" + 4).style.background = "#614385";
    document.getElementById("button" + 8).style.background = "#614385";
    displayWinner(board[0]);
    winnerFound = true;
    updateScore(board[0]);
  } else if (board[2] == board[4] && board[4] == board[6] && board[2] != "") {
    document.getElementById("button" + 2).style.background = "#614385";
    document.getElementById("button" + 4).style.background = "#614385";
    document.getElementById("button" + 6).style.background = "#614385";
    displayWinner(board[2]);
    winnerFound = true;
    updateScore(board[2]);
  }

  if (winnerFound) {
    disableButtons();
  }
}

function updateScore(winner) {
  if (winner === "X") {
    player1Score++;
  } else {
    player2Score++;
  }
  player1ScoreDisplay.querySelector("span").innerHTML = player1Score;
  player2ScoreDisplay.querySelector("span").innerHTML = player2Score;
}

function disableButtons() {
  // loop through all the buttons to disable them
  for (let i = 0; i < 9; i++) {
    document.getElementById("button" + i).disabled = true;
  }
}

function displayWinner(symbol) {
  winText.innerHTML = `${symbol} wins the game!`;
  winText.style.color = "#b2f2bb";
  winText.style.fontWeight = "bold";
}

// Restart functionality
function restartBtn() {
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.innerHTML = "";
    button.disabled = false; // Re-enable the button
    button.style.background = ""; // reset button color
    currentPlayer = "X"; // resets the default player
  }
  winText.innerHTML = "";
  playerTurnDisplay.innerHTML = "X's turn"; // resets the turn
}

// new game functionality (creates a new game)
function newGame() {
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.innerHTML = "";
    button.disabled = false; // Re-enable the button
    button.style.background = ""; // reset button color
    currentPlayer = "X"; // resets the default player
  }
  winText.innerHTML = "";
  playerTurnDisplay.innerHTML = "X's turn";
  player1ScoreDisplay.querySelector("span").innerHTML = 0; // sets both values to 0
  player2ScoreDisplay.querySelector("span").innerHTML = 0;
}

// Game state
let currentPlayer = "X"; // Tracks the current player
// Handles a cell click event
function cellClick(button) {
  // Ensure the cell is empty before placing a marker
  if (button.innerHTML === "") {
    button.innerHTML = currentPlayer;
    button.disabled = true; // disable the button after its being clicked
  }

  // Switch to the next player
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // Update turn display
  playerTurnDisplay.innerHTML = currentPlayer + "'s turn";
  checkWinner();
}

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
  // define a draw vaiable and set it to true for draw functionality
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
    handleDraw();
  }

  // Check if there is a winner by checking rows, columns, and diagonals.
  let winner = checkRows() || checkColumns() || checkDiagonals();

  // If a winner is found, display the winner, update the score, disable buttons, and set winnerFound to true.
  if (winner) {
    displayWinner(winner);
    updateScore(winner);
    disableButtons();
    winnerFound = true;
  }
}

function handleDraw() {
  winText.innerHTML = "It's a draw!";
  winText.style.color = "#ff6b6b";
  winText.style.fontWeight = "bold";
  disableButtons();
  return;
}

function checkRows() {
  // rows
  if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
    changeCellColors([0, 1, 2]);
    return board[0];
  } else if (board[3] == board[4] && board[4] == board[5] && board[3] != "") {
    changeCellColors([3, 4, 5]);
    return board[3];
  } else if (board[6] == board[7] && board[7] == board[8] && board[6] != "") {
    return board[6];
  }
  return null;
}

function checkColumns() {
  // columns
  if (board[0] == board[3] && board[3] == board[6] && board[0] != "") {
    changeCellColors([0, 3, 6]);
    return board[0];
  } else if (board[1] == board[4] && board[4] == board[7] && board[1] != "") {
    changeCellColors([1, 4, 7]);
    return board[1];
  } else if (board[2] == board[5] && board[5] == board[8] && board[2] != "") {
    changeCellColors([2, 5, 8]);
    return board[2];
  }
  return null;
}

function checkDiagonals() {
  // Diagonals
  // check if the diagonals match
  if (board[0] == board[4] && board[4] == board[8] && board[0] != "") {
    changeCellColors([0, 4, 8]);
    return board[0];
  } else if (board[2] == board[4] && board[4] == board[6] && board[2] != "") {
    changeCellColors([2, 4, 6]);
    return board[2];
  }
}

function changeCellColors(cells) {
  for (let i = 0; i < cells.length; i++) {
    document.getElementById("button" + cells[i]).style.background = "#614385";
  }
}

// update the score based on the winner
function updateScore(winner) {
  if (winner === "X") {
    player1Score++;
  } else {
    player2Score++;
  }
  player1ScoreDisplay.querySelector("span").innerHTML = player1Score;
  player2ScoreDisplay.querySelector("span").innerHTML = player2Score;
}

// disable all buttons
function disableButtons() {
  // loop through all the buttons to disable them
  for (let i = 0; i < 9; i++) {
    document.getElementById("button" + i).disabled = true;
  }
}

// display the winner
function displayWinner(symbol) {
  winText.innerHTML = `${symbol} wins the game!`;
  winText.style.color = "#b2f2bb";
  winText.style.fontWeight = "bold";
}

// Restart the game
function restartBtn() {
  // restart all buttons to their initial state
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.innerHTML = "";
    button.disabled = false; // Re-enable the button
    button.style.background = ""; // reset button color
    currentPlayer = "X"; // resets the default player
  }
  // reset the win text and player turn display
  winText.innerHTML = "";
  playerTurnDisplay.innerHTML = "X's turn"; // resets the turn
}

// start a new game
function newGame() {
  // Reset all buttons to their initial state
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.innerHTML = "";
    button.disabled = false; // Re-enable the button
    button.style.background = ""; // reset button color
    currentPlayer = "X"; // resets the default player
  }
  // Reset the win text, player turn display, and player scores
  winText.innerHTML = "";
  playerTurnDisplay.innerHTML = "X's turn";
  player1ScoreDisplay.querySelector("span").innerHTML = 0; // sets both values to 0
  player2ScoreDisplay.querySelector("span").innerHTML = 0;
}

// track the current player and handle cell clicks
let currentPlayer = "X";

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

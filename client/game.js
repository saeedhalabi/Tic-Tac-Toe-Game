// Game mechanics
// DOM elements
let playerTurnDisplay = document.getElementById("turn-text");
let player1ScoreDisplay = document.getElementById("player1-score");
let player2ScoreDisplay = document.getElementById("player2-score");
let winText = document.getElementById("win-text");

// initialize player scores
let player1Score = 0;
let player2Score = 0;

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function createBoard() {
  let btnNum = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = document.getElementById("button" + btnNum).innerHTML;
      btnNum++;
    }
  }
}

function checkWinner() {
  let winnerFound = false;
  let draw = true;

  // Check for a draw
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        draw = false;
        break;
      }
    }
    if (!draw) {
      break;
    }
  }

  // Check if there is a winner by checking rows, columns, and diagonals
  let winner = checkRows() || checkColumns() || checkDiagonals();

  // If a winner is found, display the winner, update the score, disable buttons, and set winnerFound to true.
  if (winner) {
    displayWinner(winner);
    updateScore(winner);
    disableButtons();
    winnerFound = true;
  }

  // Check for a draw
  if (!winnerFound && draw) {
    handleDraw();
  }
}

// Draw functionality
function handleDraw() {
  winText.innerHTML = "It's a draw!";
  winText.style.color = "#ff6b6b";
  winText.style.fontWeight = "bold";
  disableButtons();
}

// Checks rows
function checkRows() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][0] == board[i][1] &&
        board[i][1] == board[i][2] &&
        board[i][0] != ""
      ) {
        return board[i][0];
      }
    }
  }
  return null;
}

// Checks columns
function checkColumns() {
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== ""
    ) {
      return board[0][i];
    }
  }
  return null;
}

// Checks diagonals
function checkDiagonals() {
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== ""
  ) {
    return board[0][0];
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== ""
  ) {
    return board[0][2];
  }
  return null;
}

// Winner display functionality
function displayWinner(symbol) {
  winText.innerHTML = `${symbol} wins!`;
  winText.style.color = "#b2f2bb";
  winText.style.fontWeight = "bold";
}

// Score update functionality
function updateScore(winner) {
  if (winner === "X") {
    player1Score++;
    player1ScoreDisplay.querySelector("span").innerHTML = player1Score;
  } else {
    player2Score++;
    player2ScoreDisplay.querySelector("span").innerHTML = player2Score;
  }
}

// button disable functionality
function disableButtons() {
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.disabled = true;
  }
}

// Restart funcionality
function restartBtn() {
  currentPlayer = "X"; // Set the current player to "X"
  playerTurnDisplay.textContent = "X's turn";
  winText.textContent = "";
  for (let i = 0; i < 9; i++) {
    let button = document.getElementById("button" + i);
    button.textContent = ""; // Set the text content of the button to an empty string
    button.disabled = false; // Enable the button
    button.style.background = "";
  }
}

// New game functionality
function newGame() {
  restartBtn();
  player1ScoreDisplay.querySelector("span").innerHTML = "0";
  player2ScoreDisplay.querySelector("span").innerHTML = "0";
}

// Track the current player and handle cell clicks
let currentPlayer = "X";

function cellClick(button) {
  if (button.innerHTML === "") {
    button.innerHTML = currentPlayer;
    button.disabled = true;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    playerTurnDisplay.innerHTML = currentPlayer + "'s turn";
  }
  createBoard();
  checkWinner();
}

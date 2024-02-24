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

  // Go through each square on the board to see what symbol (X or O) is in it and store it in the board array
  for (let i = 0; i < 9; i++) {
    // Record the symbol (X or O) in each square on the board
    board[i] = document.getElementById("button" + i).innerHTML;
  }
  // rows
  // Check if the first row has the same symbol and is not empty
  if (board[0] == board[1] && board[1] == board[2] && board[0] != "") {
    // Change the background color of the winning buttons
    document.getElementById("button" + 0).style.background = "#333";
    document.getElementById("button" + 1).style.background = "#333";
    document.getElementById("button" + 2).style.background = "#333";

    // Display the winning message
    winText.innerHTML = `${board[0]} wins the game!`;
    winText.style.color = "lightgreen";
    winnerFound = true;

    // Update the score display based on the winner
    if (board[0] == "X") {
      player1Score++;
      player1ScoreDisplay.querySelector("span").innerHTML = player1Score;
    } else {
      player2Score++;
      player2ScoreDisplay.querySelector("span").innerHTML = player2Score;
    }

    // Disable all buttons if a winner is found
    if (winnerFound) {
      for (let i = 0; i < 9; i++) {
        document.getElementById("button" + i).disabled = true;
      }
    }
  }
}

// Game state
let currentPlayer = "X"; // Tracks the current player
// Handles a cell click event
function cellClick(button) {
  // Ensure the cell is empty before placing a marker
  if (button.innerHTML === "") {
    button.innerHTML = currentPlayer;
  }

  // Switch to the next player
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // Update turn display
  playerTurnDisplay.innerHTML = currentPlayer + "'s turn";
  checkWinner();
}

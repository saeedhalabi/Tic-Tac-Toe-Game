// Initializing game mechanics
let mainPlayer = "X";

// Handles the click event on a cell button. If the cell is empty, it fills the cell with the current player's symbol (X or O) and toggles the current player.
function cellClick(button) {
  if (button.innerHTML === "") {
    button.innerHTML = mainPlayer;
  }
  if (mainPlayer === "X") {
    mainPlayer = "O";
  } else {
    mainPlayer = "X";
  }
}

// Restart Button (Restarts the game)
function restartBtn() {
  // Get all buttons with the class 'grid'
  // Loop through each button
  // Clear the inner HTML of the button
}

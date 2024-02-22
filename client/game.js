// Initializing game mechanics
let mainPlayer = "X";
let turn = document.getElementById("turn-text");

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
  // handle turns
  if (mainPlayer === "X") {
    turn.innerHTML = "X's turn";
  } else if (mainPlayer === "O") {
    turn.innerHTML = "O's Turn";
  }
}

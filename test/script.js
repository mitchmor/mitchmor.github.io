const cells = document.querySelectorAll(".cell");
const winnerMessage = document.getElementById("winner-message");
const restartButton = document.getElementById("restart-button");
let currentPlayer = "x";
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

restartButton.addEventListener("click", restartGame);

function handleClick(event) {
  const cell = event.target;

  if (cell.textContent === "" && gameActive) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWinner(currentPlayer)) {
      winnerMessage.textContent = `Player ${currentPlayer.toUpperCase()} wins!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "x" ? "o" : "x";

      if (isBoardFull()) {
        winnerMessage.textContent = "It's a tie!";
        gameActive = false;
      }
    }
  }
}

function checkWinner(player) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(player);
    });
  });
}

function isBoardFull() {
  return [...cells].every((cell) => cell.textContent !== "");
}

function restartGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
  currentPlayer = "x";
  gameActive = true;
  winnerMessage.textContent = "";
}

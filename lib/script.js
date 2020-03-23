const cells = document.querySelectorAll(".table td");
const table = document.querySelector(".table tbody");

const statusDisplay = document.querySelector(".annoucement");
const restart = document.querySelector(".restart")

let gameActive = true;

let currentPlayer = "X";

let gameState = ["","","","","","","","",""];

const winningMessage = () => `player ${currentPlayer} won!`;

const drawMessage = () => "Game ended, it is a draw";

const currentPlayerTurn = () => `It's ${currentPlayer} turn`;


statusDisplay.innerHTML = currentPlayerTurn();

const handleCellPlayed = (clickedCell, clickedCellIndex, cellClass) => {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.classList.value = currentPlayer;
}

const handlePlayerChange = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleResultValidation = () => {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningCondition[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break
    }
  }
  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }
  handlePlayerChange();
}

const handleCellClick = (clickedCellEvent) => {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));
  const cellClass = clickedCellEvent.target.classList;

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }


  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
  restart.classList.remove("d-none");
}



const handleRestartGame = () => {

  gameActive = true;
  currentPlayer = "X";
  gameState = ["","","","","","","","",""];
  statusDisplay.innerHTML = currentPlayerTurn();
  cells.forEach(cell => cell.classList.value = "");
  restart.classList.add("d-none");
}


cells.forEach((cell) => cell.addEventListener("click", handleCellClick));



restart.addEventListener("click",handleRestartGame);

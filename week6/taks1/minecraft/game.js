import { boardArray } from "./board.js";

let board = document.getElementById("game-board");
let bank = document.getElementById("bank");
const NADA = "1";
bank.setAttribute("bank_value", NADA);

let currTool;
let tool1 = document.getElementById("tool1");
let tool2 = document.getElementById("tool1");
let tool3 = document.getElementById("tool1");
let tools = [tool1, tool2, tool3].forEach((item) =>
  item.addEventListener("click", setTool)
);

function setTool(e) {}

cellsBuilder(board);

function cellsBuilder(board) {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let currCell = [i, j].toString();
      let cell = document.createElement("div");

      if (boardArray[i][j] == 1) {
        cell.classList.add("cell", "sky");
        cell.setAttribute("cell-type", "1");
      }
      if (boardArray[i][j] == 2) {
        cell.classList.add("cell", "ground");
        cell.setAttribute("cell-type", "2");
      }
      if (boardArray[i][j] == 3) {
        cell.classList.add("cell", "rock");
        cell.setAttribute("cell-type", "3");
      }
      if (boardArray[i][j] == 4) {
        cell.classList.add("cell", "wood");
        cell.setAttribute("cell-type", "4");
      }
      if (boardArray[i][j] == 5) {
        cell.classList.add("cell", "leafs");
        cell.setAttribute("cell-type", "5");
      }
      cell.setAttribute("cell-index", currCell);
      cell.addEventListener("click", cellClick);
      board.appendChild(cell);
    }
  }
}

function cellClick(e) {
  let currClass = e.target.classList[1];
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let cellType = e.target.getAttribute("cell-type");

  let currBank = bank.getAttribute("bank_value");
  if (currBank == NADA) {
    bank.innerHTML = currClass;
    bank.className = currClass;

    //firt time switch
    setBoard(cellIndex, currBank);
    //add new new type to bank
    bank.setAttribute("bank_value", cellType);
  }

  if (currBank != NADA) {
    setBoard(cellIndex, currBank);
    bank.setAttribute("bank_value", NADA);
    bank.innerHTML = currClass;
    bank.className = "";
  }

  board.innerHTML = "";
  cellsBuilder(board);
}

/// get cell index  & insert to it new type
function setBoard(cellIndex, currBank) {
  boardArray[cellIndex[0]][cellIndex[1]] = currBank;
}

//------------------------------------------------------------------------------
// intro-page off
document.getElementById("intro-page-btn").addEventListener("click", () => {
  document.getElementById("game-intro").style.display = "none";
});

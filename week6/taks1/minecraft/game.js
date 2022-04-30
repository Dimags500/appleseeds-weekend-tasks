import { boardArray } from "./board.js";

let board = document.getElementById("game-board");
let bank = document.getElementById("bank");
const EMPTY = "0";
bank.setAttribute("bank_value", EMPTY);

let currTool = "0";
let tool1 = document.getElementById("tool1");
let tool2 = document.getElementById("tool2");
let tool3 = document.getElementById("tool3");
let tools = [tool1, tool2, tool3];
tools.forEach((item) => item.addEventListener("click", setTool));

function setTool(e) {
  currTool = e.target.getAttribute("tool-type");

  let tools = [tool1, tool2, tool3];
  for (let i = 0; i < tools.length; i++) {
    tools[i].style.backgroundColor = "";
  }
  e.target.style.backgroundColor = "red";
}

function cellsBuilder(board) {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      let currCell = [i, j].toString();
      let cell = document.createElement("div");

      if (boardArray[i][j] == 0) {
        cell.classList.add("cell", "cloud");
        cell.setAttribute("cell-type", "0");
      }
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
  switch (currTool) {
    case undefined || "0" || 0:
      alert("chose tool");
      return;
    case "1":
      toolAction1(e);
      return;
    case "2":
      toolAction2(e);
      return;
    case "3":
      toolAction3(e);
      return;
  }
}

function toolAction1(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let currClass = e.target.classList[1];

  if (cellType == 3 || cellType == 4 || cellType == 5 || cellType == 0) return;
  let cellBeforGroung = boardArray[parseInt(cellIndex[0]) - 1][cellIndex[1]];
  if (cellBeforGroung != 1) {
    return;
  }

  if (currBank == EMPTY) {
    bank.className = currClass;

    setBoard(cellIndex, "1");
    bank.setAttribute("bank_value", cellType);
  }

  if (currBank == "1") {
    if (cellType == "2") {
      setBoard(cellIndex, currBank);
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (currBank == "2") {
    if (cellType == "1") {
      setBoard(cellIndex, currBank);
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (bank.getAttribute("bank_value") == EMPTY) {
    bank.className = "blank";
  }

  board.innerHTML = "";
  cellsBuilder(board);
}
function toolAction2(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let currClass = e.target.classList[1];

  if (cellType == 2 || cellType == 3 || cellType == 0) return;

  if (currBank == EMPTY) {
    if (cellType == 1) return;
    bank.className = currClass;

    setBoard(cellIndex, "1");
    bank.setAttribute("bank_value", cellType);
  }

  if (currBank == "4") {
    if (cellType == "5" || cellType == "1") {
      setBoard(cellIndex, currBank);
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (currBank == "5") {
    if (cellType == "4" || cellType == "1") {
      setBoard(cellIndex, currBank);
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (bank.getAttribute("bank_value") == EMPTY) {
    bank.className = "blank";
  }

  board.innerHTML = "";
  cellsBuilder(board);
}
function toolAction3(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let currClass = e.target.classList[1];

  if (cellType == 2 || cellType == 4 || cellType == 5 || cellType == 0) return;

  if (currBank == EMPTY) {
    if (cellType == 1) return;
    bank.className = currClass;

    setBoard(cellIndex, "1");
    bank.setAttribute("bank_value", cellType);
  }

  if (currBank == "3") {
    setBoard(cellIndex, currBank);
    bank.setAttribute("bank_value", EMPTY);
  }

  if (bank.getAttribute("bank_value") == EMPTY) {
    bank.className = "blank";
  }

  board.innerHTML = "";
  cellsBuilder(board);
}

/// get cell index  & insert to it new type
function setBoard(cellIndex, currBank) {
  boardArray[cellIndex[0]][cellIndex[1]] = currBank;
}
cellsBuilder(board);

//------------------------------------------------------------------------------
// intro-page off
document.getElementById("intro-page-btn").addEventListener("click", () => {
  document.getElementById("game-intro").style.display = "none";
});

import { boardArray, cellsBuilder, setBoard } from "./board.js";
import { currTool } from "./tools.js";

let board = document.getElementById("game-board");
let bank = document.getElementById("bank");
const EMPTY = "0";
bank.setAttribute("bank_value", EMPTY);

cellsBuilder(board, cellClick);

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
  let cellBefor = boardArray[parseInt(cellIndex[0]) - 1][cellIndex[1]];
  let cellafter = boardArray[parseInt(cellIndex[0]) + 1][cellIndex[1]];

  if (cellBefor != 1 || cellafter != 2) {
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
  cellsBuilder(board, cellClick);
}
function toolAction2(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let currClass = e.target.classList[1];

  if (cellType == 2 || cellType == 3 || cellType == 0) return;
  let cellBefor = boardArray[parseInt(cellIndex[0]) - 1][cellIndex[1]];
  let cellafter = boardArray[parseInt(cellIndex[0]) + 1][cellIndex[1]];

  // if (cellafter != 2 || (cellafter != 3 && cellafter != 3)) return;

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
  cellsBuilder(board, cellClick);
}
function toolAction3(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let cellIndex = e.target.getAttribute("cell-index").split(",");
  let currClass = e.target.classList[1];

  if (cellType == 2 || cellType == 4 || cellType == 5 || cellType == 0) return;
  let cellBefor = boardArray[parseInt(cellIndex[0]) + 1][cellIndex[1]];
  if (cellBefor != 2 && cellBefor != 3) return;

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
  cellsBuilder(board, cellClick);
}

// intro-page off
document.getElementById("intro-page-btn").addEventListener("click", () => {
  document.getElementById("game-intro").style.display = "none";
});

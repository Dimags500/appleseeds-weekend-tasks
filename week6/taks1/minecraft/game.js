import { boardArray } from "./board.js";

let board = document.getElementById("game-board");
let bank = document.getElementById("bank");
const EMPTY = "0";
bank.setAttribute("bank_value", EMPTY);

let currTool = "0";
let tool1 = document.getElementById("tool1");
let tool2 = document.getElementById("tool2");
let tool3 = document.getElementById("tool3");
let tools = [tool1, tool2, tool3].forEach((item) =>
  item.addEventListener("click", setTool)
);

function setTool(e) {
  currTool = e.target.getAttribute("tool-type");
  console.log(currTool + " curr tool ");
}

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
  switch (currTool) {
    case undefined || "0":
      alert("chose tool");
      return;
    case "1":
      toolAction1(e);
      return;
    case 2:
      toolAction2(e);
      return;
    case 3:
      toolAction3(e);
      return;
  }
}

function toolAction1(e) {
  let currBank = bank.getAttribute("bank_value");
  let cellType = e.target.getAttribute("cell-type");
  let currClass = e.target.classList[1];

  if (cellType == 3 || cellType == 4 || cellType == 5) return;

  //------------ check if cell above is not sky

  if (currBank == EMPTY) {
    let cellIndex = e.target.getAttribute("cell-index").split(",");
    bank.className = currClass;

    //firt time switch
    setBoard(cellIndex, "1");
    //add new new type to bank
    bank.setAttribute("bank_value", cellType);
  }

  if (currBank == "1") {
    let cellIndex = e.target.getAttribute("cell-index").split(",");
    let cellType = e.target.getAttribute("cell-type");

    if (cellType == "2") {
      //firt time switch
      setBoard(cellIndex, currBank);
      //add new new type to bank
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (currBank == "2") {
    let cellIndex = e.target.getAttribute("cell-index").split(",");
    let cellType = e.target.getAttribute("cell-type");

    if (cellType == "1") {
      //firt time switch
      setBoard(cellIndex, currBank);
      //add new new type to bank
      bank.setAttribute("bank_value", EMPTY);
    }
  }

  if (bank.getAttribute("bank_value") == EMPTY) {
    bank.className = "blank";
  }

  console.log("new stae " + bank.getAttribute("bank_value"));
  board.innerHTML = "";
  cellsBuilder(board);
}
function toolAction2(e) {
  console.log(e);
}
function toolAction3(e) {
  console.log(e);
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

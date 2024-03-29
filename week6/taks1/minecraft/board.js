let boardArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //11
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //12
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //13
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //14
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //15
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //16
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //19
];

function skyFiller(boardArray) {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      boardArray[i][j] = 1;
    }
  }
}

function groundFiller(boardArray) {
  for (let i = 12; i < 20; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      boardArray[i][j] = 2;
    }
  }
}

function rockFiller(boardArray) {
  for (let i = 10; i < 12; i++) {
    for (let j = 8; j < 10; j++) {
      boardArray[i][j] = 3;
    }

    for (let j = 2; j < 4; j++) {
      boardArray[i][j] = 3;
    }
  }
}

function woodFiller(boardArray) {
  for (let i = 7; i < 12; i++) {
    for (let j = 14; j < 16; j++) {
      boardArray[i][j] = 4;
    }
  }
}

function leafsFiller(boardArray) {
  for (let i = 3; i < 7; i++) {
    for (let j = Math.floor(Math.random() * 5) + 10; j < 18; j++) {
      boardArray[i][j] = 5;
    }
  }
}

function cloudFiller(boardArray) {
  for (let i = 2; i < 7; i++) {
    for (let j = 2; j < Math.floor(Math.random() * 10); j++) {
      boardArray[i][j] = 0;
    }
    for (let j = 2; j < Math.floor(Math.random() * 10); j++) {
      boardArray[i][j] = 0;
    }
  }
}

function cellsBuilder(board, cellClick) {
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

function setCell(cellIndex, currBank) {
  boardArray[cellIndex[0]][cellIndex[1]] = currBank;
}

skyFiller(boardArray);
groundFiller(boardArray);
woodFiller(boardArray);
leafsFiller(boardArray);
rockFiller(boardArray);
cloudFiller(boardArray);

export { boardArray, cellsBuilder, setCell };

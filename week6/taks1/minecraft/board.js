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

function skyBulder(boardArray) {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      boardArray[i][j] = 1;
    }
  }
}

function groundBuilder(boardArray) {
  for (let i = 12; i < 20; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      boardArray[i][j] = 2;
    }
  }
}

function rockBuilder(boardArray) {
  for (let i = 10; i < 12; i++) {
    for (let j = 8; j < 10; j++) {
      boardArray[i][j] = 3;
    }

    for (let j = 2; j < 4; j++) {
      boardArray[i][j] = 3;
    }
  }
}

function woodBuilder(boardArray) {
  for (let i = 7; i < 12; i++) {
    for (let j = 14; j < 16; j++) {
      boardArray[i][j] = 4;
    }
  }
}

function leafsBuilder(boardArray) {
  for (let i = 3; i < 7; i++) {
    for (let j = Math.floor(Math.random() * 5) + 10; j < 18; j++) {
      boardArray[i][j] = 5;
    }
  }
}

function cloudBuilder(boardArray) {
  for (let i = 2; i < 7; i++) {
    for (let j = 2; j < Math.floor(Math.random() * 10); j++) {
      boardArray[i][j] = 0;
    }
    for (let j = 2; j < Math.floor(Math.random() * 10); j++) {
      boardArray[i][j] = 0;
    }
  }
}

skyBulder(boardArray);
groundBuilder(boardArray);
woodBuilder(boardArray);
leafsBuilder(boardArray);
rockBuilder(boardArray);
cloudBuilder(boardArray);

export { boardArray };

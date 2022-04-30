
cell-types atribute for swithing css classes  
empthy - 0 
sky - 1 
ground - 2
rock -3 
wood - 4 
leafs - 5 

Tools for switch cells 

tool1 - cell-types 1 ,2
tool2 - cell-types 4,5
tool3 = cell-types 3
 

1.board.js contains array of 20x20 filled with values 0-5 bt number of functions 
2. function cellsBuilder(div , callback) recive game-board div 
  create cell element (div) set cell atribute with css class
  set cell-type atribute with number 0-5 
  set cell-index atribute with number of position of element in array 
  set callback on click event and append the element in to game-board div 
3.   
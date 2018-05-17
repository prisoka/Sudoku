function sayHi(){
  return "hello";
}

//How to make a code testable???
//1. what are my inputs? -> Two 2d arrays
//2. what are my outputs? -> boolean
//3. remove dependecies to make the code testable

function validateBoards(board1, board2){
  if(board1 === undefined || board2 === undefined){
    return false;
  }

  for (let i = 0; i < board1.length; i++){
    for (let j = 0; j < board1[i].length; j++){
      if(board1[i][j] !== board2[i][j]){
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  sayHi : sayHi,
  validateBoards : validateBoards,
  elementBoard : elementBoard
}

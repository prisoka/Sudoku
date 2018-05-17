const assert = require("chai").assert;
const app = require("../sudokuLogic.js");

describe("greeting", function(){
  it("should return hello", function(){
    assert.equal(app.sayHi(), "hello");
  });
});

let sudoku = [
  [5,4,1,0,6,0,0,7,0],
  [8,0,6,0,2,0,0,0,0],
  [9,7,0,0,0,1,8,0,0],
  [1,0,0,2,3,0,0,0,0],
  [0,5,0,9,0,4,0,0,0],
  [3,0,9,0,8,7,0,0,0],
  [7,6,5,3,4,0,0,9,0],
  [4,0,8,1,7,5,0,2,0],
  [2,1,3,6,0,0,0,0,0]
]

let sudokuSolved = [
  [5,4,1,8,6,3,2,7,9],
  [8,3,6,7,2,9,5,1,4],
  [9,7,2,4,5,1,8,3,6],
  [1,8,4,2,3,6,9,5,7],
  [6,5,7,9,1,4,3,8,2],
  [3,2,9,5,8,7,4,6,1],
  [7,6,5,3,4,2,1,9,8],
  [4,9,8,1,7,5,6,2,3],
  [2,1,3,6,9,8,7,4,5]
]

describe("validateBoards", function(){
  it("should return FALSE when one of the board is undefined", function(){
    assert.equal(app.validateBoards(), false);
    assert.equal(app.validateBoards(sudoku), false);
  });

  it("should return FALSE when the boards are not equal", function(){
    assert.equal(app.validateBoards(sudoku, sudokuSolved), false);
  });

  it("should return TRUE when the boards are equal", function(){
    assert.equal(app.validateBoards(sudokuSolved, sudokuSolved), true);
  });

  it("board1 should return type of number", function(){
    assert.typeOf(app.validateBoards(sudokuSolved, "number"));
  });

  it("board2 should return type of number", function(){
    assert.typeOf(app.validateBoards(sudoku, "number"));
  });
});

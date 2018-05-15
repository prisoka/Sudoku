let selectedNum = "";

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

window.onload = function() {

  populateBoard(sudoku);
  setupNumberMenu();
  setupResetBtn(sudoku);
  setupSolveBtn(sudokuSolved);
}

function populateBoard(sudoku){
  sudoku.forEach(function (row, index) {
    const rowDom = document.querySelectorAll(".row")[index];

    row.forEach(function (element, index) {
      const cell = rowDom.querySelectorAll(".cell")[index];
      cell.innerHTML = element;

      if (element === 0) {
        cell.innerHTML = ''
        cell.classList.add("empty");
        cell.onclick = applySelectedNumber;
      }
    });
  });
}

function setupNumberMenu() {
    let numberButtons = document.querySelector(".number-menu").children;

    for (let i=0; i<numberButtons.length; i++){
      let numberButton = numberButtons[i];
      numberButton.onclick = function(event) {
        let selectedNumBtn = document.querySelector(".selected");

        if (selectedNumBtn !== null){
          selectedNumBtn.classList.remove("selected");
        }

        numberButton.classList.add("selected");
        selectedNum = (numberButton.value);
      }
    }
}

function applySelectedNumber(event){
  let cellDom = event.target;
  cellDom.innerHTML = selectedNum;
}

function setupResetBtn(sudoku){
  document.getElementById("reset").onclick = function(){
    populateBoard(sudoku);
  }
}

function setupSolveBtn(sudokuSolved){
  document.getElementById("solve").onclick = function(){
    populateBoard(sudokuSolved);
  }
}

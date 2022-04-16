class Cell {
  positionX;

  postionY;

  alive = false;

  constructor(positionX, positionY) {
    this.alive = false;
    this.positionX = positionX;
    this.postionY = positionY;
  }
}

const columns = 5;
const rows = 5;
const board = [];

const createBoard = () => {
  for (let y = 0; y < columns; y++) {
    board.push([]);
    for (let x = 0; x < rows; x++) {
      board[y].push(new Cell(x, y));
    }
  }
  return board;
};

createBoard();

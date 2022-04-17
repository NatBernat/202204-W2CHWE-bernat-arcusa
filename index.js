/* eslint-disable lines-between-class-members */

const gameOfLife = () => {
  const newBoard = [];
  const rows = 3;
  const columns = 3;
  class Cell {
    positionX;
    postionY;
    alive;
    aliveNeighbours = 0;

    constructor(positionX, positionY) {
      this.alive = false;
      this.positionX = positionX;
      this.postionY = positionY;
    }
  }
  const createBoard = () => {
    for (let x = 0; x < rows; x++) {
      newBoard.push([]);
      for (let y = 0; y < columns; y++) {
        newBoard[x].push(new Cell(x, y));
      }
    }
    return newBoard;
  };

  const firstTurn = () => {
    newBoard[1][0].alive = true;
    newBoard[1][1].alive = true;
    newBoard[1][2].alive = true;
  };

  createBoard();
  firstTurn();

  do {
    const checkNeighbours = () => {
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          newBoard[i][j].aliveNeighbours = 0;

          if (newBoard[i - 1][j - 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i - 1][j].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i - 1][j + 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i][j - 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i][j + 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i + 1][j - 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i + 1][j].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }
          if (newBoard[i + 1][j + 1].alive === true) {
            newBoard[i][j].aliveNeighbours += 1;
          }

          if (
            newBoard[i][j].alive === false &&
            newBoard[i][j].aliveNeighbours > 2
          ) {
            newBoard[i][j].alive = true;
          } else if (
            newBoard[i][j].alive === true &&
            newBoard[i][j].aliveNeighbours === 2
          ) {
            newBoard[i][j].alive = true;
          } else if (
            newBoard[i][j].alive === true &&
            newBoard[i][j].aliveNeighbours === 3
          ) {
            newBoard[i][j].alive = true;
          } else {
            newBoard[i][j].alive = false;
          }
        }
      }
    };
    checkNeighbours();
    createBoard();
  } while (newBoard.aliveNeighbours === false);
};

gameOfLife();

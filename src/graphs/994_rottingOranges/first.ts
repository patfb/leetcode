const orangesRotting = (grid: number[][]): number => {
  enum Orange {
    empty = 0,
    fresh = 1,
    rotten = 2,
  }

  class Coord {
    row: number;
    column: number;

    constructor({ row, column }: { row: number; column: number }) {
      this.row = row;
      this.column = column;
    }

    toString() {
      return `${this.row},${this.column}`;
    }
  }

  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;

  const inBounds = ({
    coord,
    maxRow,
    maxCol,
  }: {
    coord: Coord;
    maxRow: number;
    maxCol: number;
  }) =>
    coord.row >= 0 &&
    coord.row <= maxRow &&
    coord.column >= 0 &&
    coord.column <= maxCol;

  const directions = [
    [0, 1], // up
    [0, -1], // down
    [-1, 0], // left
    [1, 0], // right
  ];

  // I still need to find all rotten oranges and start on a rotten orange
  // I need to figure out how to do breadth first with 2 starting points
  const breadthFirstFill = ({
    initialRottenCoords,
    grid,
    freshCount,
  }: {
    initialRottenCoords: Coord[];
    grid: number[][];
    freshCount: number;
  }) => {
    let steps = 0;
    let freshRemaining = freshCount;
    const queue = [...initialRottenCoords];

    while (queue.length && freshCount) {
      for (const _position of queue) {
        const current = queue.shift();

        console.log(`steps:${steps}, current:${current} queue:${queue.length}
        ${grid[0]}
        ${grid[1]}
        ${grid[2]}`);

        for (const d of directions) {
          const nextCoord = new Coord({
            row: current.row + d[0],
            column: current.column + d[1],
          });

          if (
            !inBounds({ coord: nextCoord, maxRow, maxCol }) ||
            grid[nextCoord.row][nextCoord.column] !== Orange.fresh
          ) {
            continue;
          }

          // rot the current orange
          grid[current.row][current.column] = Orange.rotten;
          queue.push(nextCoord);
          freshRemaining--;
        }
      }
      steps++;
    }

    return steps;
  };

  const parseGrid = (grid: number[][]) => {
    const rowLength = grid.length;
    const columnLength = grid[0].length;

    const rottenCoords: Coord[] = [];
    let freshCount = 0;

    for (let row = 0; row < rowLength; row++) {
      for (let column = 0; column < columnLength; column++) {
        if (grid[row][column] === Orange.rotten) {
          rottenCoords.push(new Coord({ row, column }));
        }
        if (grid[row][column] === Orange.fresh) {
          freshCount++;
        }
      }
    }

    return {
      rottenCoords,
      rottenCount: rottenCoords.length,
      freshCount,
    };
  };

  const { rottenCoords, rottenCount, freshCount } = parseGrid(grid);

  console.log("rottenCoords", rottenCoords);
  console.log("rottenCount", rottenCount);
  console.log("nFreshOranges", freshCount);

  const result = breadthFirstFill({
    initialRottenCoords: rottenCoords,
    grid,
    freshCount,
  });

  console.log("result", result);
};

console.log(
  "orangesRotting",
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);

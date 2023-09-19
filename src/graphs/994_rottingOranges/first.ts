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
    [-1, 0], // left
    [1, 0], // right
    [0, 1], // up
    [0, -1], // down
  ];

  // I still need to find all rotten oranges and start on a rotten orange
  // I need to figure out how to do breadth first with 2 starting points
  const breadthFirstFill = ({
    coord,
    grid,
  }: {
    coord: Coord;
    grid: number[][];
  }) => {
    let steps = 0;
    const queue = [coord];

    while (queue.length) {
      const current = queue.shift();

      // rot the current orange
      grid[current.row][current.column] = Orange.rotten;

      console.log(`steps:${steps}, queue:${queue.length}
      ${grid[0]}
      ${grid[1]}
      ${grid[2]}`);

      for (const d of directions) {
        const nextCoord = new Coord({
          row: current.row + d[0],
          column: current.column + d[1],
        });

        if (
          inBounds({ coord: nextCoord, maxRow, maxCol }) &&
          grid[nextCoord.row][nextCoord.column] === Orange.fresh
        ) {
          steps++;
          queue.push(nextCoord);
        }
      }
    }

    return steps;
  };

  const findRottenIndices = (grid: number[][]): Coord[] => {
    const rowLength = grid.length;
    const columnLength = grid[0].length;

    const rottenCoords: Coord[] = [];

    for (let row = 0; row < rowLength; row++) {
      for (let column = 0; column < columnLength; column++) {
        if (grid[row][column] === Orange.rotten) {
          rottenCoords.push(new Coord({ row, column }));
        }
      }
    }

    return rottenCoords;
  };

  const rotten = findRottenIndices(grid);
  const nRotten = rotten.length;

  console.log("rotten", rotten);
  console.log("nRotten", nRotten);

  const result = breadthFirstFill({
    coord: new Coord({ row: 0, column: 0 }),
    grid,
  });
};

console.log(
  "orangesRotting",
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
);

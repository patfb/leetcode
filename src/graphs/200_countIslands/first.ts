const numIslands = (grid: string[][]): number => {
  interface Coordinate {
    row: number;
    column: number;
  }

  if (!grid.length) return 0;

  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const gridArea = rowLength * columnLength;

  const visited = new Set<Coordinate>();
  let islands = 0;

  // const inBounds = (coordinate: Coordinate, grid: string[][]) => {
  //   const rowInBound = coordinate.row >= 0 && coordinate
  // };

  const bfs = (coordinate: Coordinate) => {
    // console.log("searching", coordinate);
    // console.log("grid", grid);

    const queue = [coordinate];
    visited.add(coordinate);

    const directions = [
      { row: 1, column: 0 },
      { row: -1, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: -1 },
    ];

    while (queue.length && visited.size <= gridArea) {
      const coordinate = queue.shift();
      directions.forEach((direction) => {
        const searchCoord = {
          row: coordinate.row + direction.row,
          column: coordinate.column + direction.column,
        };

        if (
          searchCoord.row >= 0 &&
          searchCoord.row < rowLength &&
          searchCoord.column >= 0 &&
          searchCoord.column < columnLength &&
          grid[searchCoord.row][searchCoord.column] === "1" &&
          !visited.has(searchCoord)
        ) {
          queue.push(searchCoord);
          visited.add(searchCoord);
        }
      });
    }
  };

  console.log("visited", visited);

  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      const coordinate = { row, column };
      if (grid[row][column] === "1" && !visited.has(coordinate)) {
        bfs(coordinate);
        islands += 1;
      }
    }
  }

  return islands;
};

console.log(
  "numIslands",
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ]),
);

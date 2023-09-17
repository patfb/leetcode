const numIslands = (grid: string[][]): number => {
  interface Coordinate {
    row: number;
    column: number;
  }

  if (!grid.length) return 0;

  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const gridArea = rowLength * columnLength;

  console.log(`rowLength:${rowLength}, columnLength:${columnLength}`);

  const visited = new Set<string>();
  let islands = 0;

  const bfs = (coordinate: Coordinate) => {
    const queue = [coordinate];
    visited.add(JSON.stringify(coordinate));

    const directions = [
      { row: 1, column: 0 },
      { row: -1, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: -1 },
    ];

    let iteration = 0;
    while (queue.length) {
      // console.log(
      //   `iteration: ${iteration}, queue:${queue.length}, visited:${visited.size}`,
      // );
      iteration++;
      const coordinate = queue.shift();
      console.log("coordinate", coordinate);
      directions.forEach((direction) => {
        const searchCoord = {
          row: coordinate.row + direction.row,
          column: coordinate.column + direction.column,
        };

        console.log("searchCoord", searchCoord);

        if (
          searchCoord.row >= 0 &&
          searchCoord.row < rowLength &&
          searchCoord.column >= 0 &&
          searchCoord.column < columnLength &&
          grid[searchCoord.row][searchCoord.column] === "1" &&
          !visited.has(JSON.stringify(coordinate))
        ) {
          queue.push(searchCoord);
          visited.add(JSON.stringify(coordinate));
        }
      });
    }
  };

  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      const coordinate = { row, column };
      console.log(
        `[${row},${column}] = ${grid[row][column]}, visited:${visited.size}`,
      );
      if (
        grid[row][column] === "1" &&
        !visited.has(JSON.stringify(coordinate))
      ) {
        // console.log(`bfs invoked. row:${row}, column:${column}`);
        bfs(coordinate);
        islands += 1;
      }
    }
  }

  console.log("visited", Array.from(visited));

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

// console.log(
//   "numIslands",
//   numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ]),
// );

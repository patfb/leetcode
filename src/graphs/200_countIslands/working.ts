const numIslands = (grid: string[][]): number => {
  if (!grid.length) return 0; // empty grid has no islands

  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const visited = new Set<string>();
  let islandCount = 0;

  const inBounds = ({
    row,
    column,
    rowLength,
    columnLength,
  }: {
    row: number;
    column: number;
    rowLength: number;
    columnLength: number;
  }) => row >= 0 && row < rowLength && column >= 0 && column < columnLength;

  const dfs = (row: number, column: number) => {
    console.log(`   dfs(${row},${column})`);
    const stack = [];
    visited.add(`${row},${column}`);
    stack.push([row, column]);

    while (stack.length) {
      const [sRow, sColumn] = stack.pop();
      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dRow, dColumn] of directions) {
        const rowCheck = sRow + dRow;
        const colCheck = sColumn + dColumn;
        if (
          inBounds({
            row: rowCheck,
            column: colCheck,
            rowLength,
            columnLength,
          }) &&
          grid[rowCheck][colCheck] === "1" &&
          !visited.has(`${rowCheck},${colCheck}`)
        ) {
          stack.push([rowCheck, colCheck]);
          visited.add(`${rowCheck},${colCheck}`);
        }
      }
    }
  };

  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      if (grid[row][column] === "1" && !visited.has(`${row},${column}`)) {
        console.log(`[${row},${column}] = ${grid[row][column]}`);
        dfs(row, column);
        islandCount++;
      }
    }
  }

  return islandCount;
};

console.log(
  "numIslands",
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);

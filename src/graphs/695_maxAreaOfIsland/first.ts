/* 
https://leetcode.com/problems/max-area-of-island
Runtime 89ms beats 34.57%of users with TypeScript
Memory 49.23MB beats 45.21% of users with TypeScript

 */

const maxAreaOfIsland = (grid: number[][]): number => {
  if (!grid.length) return 0; // empty grid has no islands

  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const visited = new Set<string>();
  let maxIslandArea = 0;

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
    // console.log(`   looking for more land connected to ${row},${column}`);
    const stack = [];
    visited.add(`${row},${column}`);
    stack.push([row, column]);
    let islandArea = 1; // needs to start at 1 because we only start dfs on a tile that is already an island

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
          grid[rowCheck][colCheck] === 1 &&
          !visited.has(`${rowCheck},${colCheck}`)
        ) {
          // console.log(`   adjacent land found at '${rowCheck},${colCheck}'`);
          islandArea++;
          stack.push([rowCheck, colCheck]);
          visited.add(`${rowCheck},${colCheck}`);
        }
      }
    }

    return islandArea;
  };

  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      if (grid[row][column] === 1 && !visited.has(`${row},${column}`)) {
        // console.log(`land found '${row},${column}'`);
        const islandArea = dfs(row, column);
        maxIslandArea = Math.max(maxIslandArea, islandArea);
      }
    }
  }

  return maxIslandArea;
};

console.log(
  "maxAreaOfIsland",
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ]),
);

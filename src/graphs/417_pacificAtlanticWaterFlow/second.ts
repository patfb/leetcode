/* 
https://leetcode.com/problems/pacific-atlantic-water-flow/
Runtime 403ms beats 13.04% of users with TypeScript
Memory 60.04MB beats 12.32% of users with TypeScript
*/

const pacificAtlantic = (heights: number[][]): number[][] => {
  if (!heights.length) return [[]];

  const rowLength = heights.length;
  const columnLength = heights[0].length;

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

  const hitPacific = ({
    row,
    column,
  }: {
    row: number;
    column: number;
  }): number => {
    // pacific is at 0 height so if we're on the shore then we've hit pacific. Even if shore is high we can always go downhill to pacific
    const pacificReached = row === 0 || column === 0;
    return pacificReached ? 1 : 0;
  };

  const hitAtlantic = ({
    row,
    column,
    maxRow,
    maxColumn,
  }: {
    row: number;
    column: number;
    maxRow: number;
    maxColumn: number;
  }): number => {
    // atlantic is at 0 height so if we're on the shore then we've hit atlantic. Even if shore is high we can always go downhill to atlantic
    const atlanticReached = row === maxRow || column === maxColumn;
    return atlanticReached ? 1 : 0;
  };

  const isTargetDownhill = ({
    current,
    target,
  }: {
    current: number;
    target: number;
  }) => target <= current;

  const dfs = (row: number, column: number, visited = new Set<string>()) => {
    // console.log(`   looking for more land connected to ${row},${column}`);
    const stack = [];
    visited.add(`${row},${column}`);
    stack.push([row, column]);
    let hasPathToAtlantic = 0; // 0 for false 1 for true
    let hasPathToPacific = 0; // 0 for false 1 for true

    while (stack.length && hasPathToAtlantic + hasPathToPacific < 2) {
      const [sRow, sColumn] = stack.pop();

      // we can use Math.max to set hitAtlantic to true and keep it there because 1 will always be greater than 0 and 1 is true and 0 is false
      const reachedAtlantic = hitAtlantic({
        row: sRow,
        column: sColumn,
        maxRow: rowLength - 1,
        maxColumn: columnLength - 1,
      });

      const reachedPacific = hitPacific({
        row: sRow,
        column: sColumn,
      });

      hasPathToAtlantic = Math.max(hasPathToAtlantic, reachedAtlantic);
      hasPathToPacific = Math.max(hasPathToPacific, reachedPacific);

      const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];

      for (const [dRow, dColumn] of directions) {
        const targetRow = sRow + dRow;
        const targetCol = sColumn + dColumn;

        if (
          inBounds({
            row: targetRow,
            column: targetCol,
            rowLength,
            columnLength,
          }) &&
          isTargetDownhill({
            current: heights[sRow][sColumn],
            target: heights[targetRow][targetCol],
          }) &&
          !visited.has(`${targetRow},${targetCol}`)
        ) {
          // console.log(
          //   `   adjacent lower land found. current:'${sRow},${sColumn}' -> ${heights[sRow][sColumn]} target:'${targetRow},${targetCol}' -> ${heights[targetRow][targetCol]}`,
          // );

          stack.push([targetRow, targetCol]);
          visited.add(`${targetRow},${targetCol}`);
        }
      }
    }

    return hasPathToAtlantic + hasPathToPacific === 2;
  };

  const bothOceans = [];
  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      // console.log(`Coordinate '${row},${column}'`);
      const hasBothPaths = dfs(row, column);
      if (hasBothPaths) bothOceans.push([row, column]);
    }
  }

  return bothOceans;
};

console.log(
  "pacificAtlantic",
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ]),
);

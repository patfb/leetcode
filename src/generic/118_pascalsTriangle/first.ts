// https://leetcode.com/problems/pascals-triangle
// Runtime 52ms beats 85.77% of users with TypeScript
// Memory 44.29MB beats 74.04% of users with TypeScript

/* 
  [1]
  [1, 1]
  [1, 2, 1]
  [1, 3, 3, 1]
  [1, 4, 6, 4, 1]  
*/

const generate = (numRows: number): number[][] => {
  const allRows: number[][] = [[1]];

  const calcNextRow = (currentRow: number[]) => {
    const padded = [0, ...currentRow];
    const nextRow: number[] = [];

    for (let index = 0; index < padded.length; index++) {
      const left = padded[index];
      const right = padded[index + 1] || 0;
      const nextRowItem = left + right;
      nextRow.push(nextRowItem);
    }
    return nextRow;
  };

  if (numRows === 1) return allRows;

  for (let index = 1; index < numRows; index++) {
    const previous = allRows.at(-1);
    const current = calcNextRow(previous);
    allRows.push(current);
  }

  return allRows;
};

console.log("pascals", generate(5));

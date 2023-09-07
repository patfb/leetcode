// https://leetcode.com/problems/pascals-triangle-ii
// Runtime 57ms beats 55.43% of users with TypeScript
// Memory 44.36MB beats 17.83% of users with TypeScript

/* 
  [1]
  [1, 1]
  [1, 2, 1]
  [1, 3, 3, 1]
  [1, 4, 6, 4, 1]  
*/

const getRow = (rowIndex: number): number[] => {
  const allRows: number[][] = [[1], [1, 1]];

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

  if (rowIndex === 0) return allRows[0];
  if (rowIndex === 1) return allRows[1];

  for (let index = 1; index < rowIndex; index++) {
    const previous = allRows.at(-1);
    const current = calcNextRow(previous);
    allRows.push(current);
  }

  return allRows[rowIndex];
};

console.log("pascals", getRow(4));

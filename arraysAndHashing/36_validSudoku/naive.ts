// https://leetcode.com/problems/valid-sudoku/

// Runtime: 68 ms beats 89.39% of users with Typescript
// Memory: 47.79 mb beats 33.61% of users with Typescript

// remember to remove console.log statements to dramatically improve runtime stats and improve memory stats

// need to check each row - this is easy just check that each row only has numbers 1 - 9. Make sure there are no repeats - that's it
// check each column. We can make all the columns by taking the matching indices from each row. For example make an array of row1[0] and row2[0], etc
// check each box - we do this by grouping the rows into groups of 3 because you need 3 rows to make a row of boxes

const allUnique = (input: string[]): boolean => {
  // convert the array to a set - sets only have 1 of each value
  // if the input array is longer than the set then that means we have a repeat number so it's invalid
  const set = new Set(input);
  return set.size === input.length;
};

const allBlank = (input: string[]): boolean =>
  input.every((sudokuNumber) => sudokuNumber === ".");

// the sudoku rows come with periods "." to represent empty spaces. We need to remove all of these so the set compare will work
const stripOutPlaceholderDots = (input: string[]) =>
  input.filter((sudokuNumber) => sudokuNumber !== ".");

const getColumnsFromRows = (rows: string[][]): string[][] => {
  // we know the size of the sudoku board and the size of the input arrays so we could make 9 colums. This won't scale obviously for bigger sudokus
  // if they exist but it solves this problem
  const column0: string[] = [];
  const column1: string[] = [];
  const column2: string[] = [];
  const column3: string[] = [];
  const column4: string[] = [];
  const column5: string[] = [];
  const column6: string[] = [];
  const column7: string[] = [];
  const column8: string[] = [];

  rows.forEach((row) => {
    column0.push(row[0]);
    column1.push(row[1]);
    column2.push(row[2]);
    column3.push(row[3]);
    column4.push(row[4]);
    column5.push(row[5]);
    column6.push(row[6]);
    column7.push(row[7]);
    column8.push(row[8]);
  });

  return [
    column0,
    column1,
    column2,
    column3,
    column4,
    column5,
    column6,
    column7,
    column8,
  ];
};

/* buckets 3 rows at a time into the 3 squares that form each row of squares on the sudoku puzzle. Only works with 3 rows at a time so we'll
have to run this function 3 times because we have 3 rows of squares that make up a sudoku puzzle */
const getRowOfSquaresFrom3Rows = (rows: string[][]): string[][] => {
  // doing this naively first before I figure out a better way
  // we know how sudoku puzzles work and we only have to solve a 9x9 sudoku so this is good enough
  const leftSquare: string[] = [];
  const centerSquare: string[] = [];
  const rightSquare: string[] = [];

  rows.forEach((row) => {
    leftSquare.push(row[0]);
    leftSquare.push(row[1]);
    leftSquare.push(row[2]);

    centerSquare.push(row[3]);
    centerSquare.push(row[4]);
    centerSquare.push(row[5]);

    rightSquare.push(row[6]);
    rightSquare.push(row[7]);
    rightSquare.push(row[8]);
  });

  return [leftSquare, centerSquare, rightSquare];
};

const isSudokuListValid = (sudokuLists: string[][]): boolean => {
  return sudokuLists.every((sudokuList) => {
    const isAllBlank = allBlank(sudokuList);
    if (isAllBlank) return true;

    const dotsRemoved = stripOutPlaceholderDots(sudokuList);
    return allUnique(dotsRemoved);
  });
};

const isValidSudoku = (board: string[][]): boolean => {
  const isBlankBoard = board.every((row) => allBlank(row));

  if (isBlankBoard) return true; // if the board is totally blank then that's allowed apparently so we'll check for that first

  // do all rows unique first because it requires the least amount of work. Allows us to fail fast
  const allRowsUnique = isSudokuListValid(board);

  if (!allRowsUnique) {
    // console.log("all rows are not unique");
    return false; // if rows aren't unique then fail fast
  }

  // console.log("row length", board.length);

  // only do this if all rows are unique
  const columns = getColumnsFromRows(board);

  // console.log("column count", columns.length);
  // console.log("columns are", columns);

  const allColumnsUnique = isSudokuListValid(columns);

  if (!allColumnsUnique) {
    // console.log("all columns are not unique");
    return false; // if columns aren't unique then fail fast
  }

  // do the squares last because it's the hardest

  const [row1, row2, row3, row4, row5, row6, row7, row8, row9] = board;

  const firstThreeSquares = getRowOfSquaresFrom3Rows([row1, row2, row3]);
  const secondThreeSquares = getRowOfSquaresFrom3Rows([row4, row5, row6]);
  const lastThreeSquares = getRowOfSquaresFrom3Rows([row7, row8, row9]);

  // we can do all of these at the same time because isSodukuListValid just works on an array of arrays
  const allSquaresUnique = isSudokuListValid([
    ...firstThreeSquares,
    ...secondThreeSquares,
    ...lastThreeSquares,
  ]);

  if (!allSquaresUnique) {
    // console.log("all squares are not unique");
    return false;
  }

  return allRowsUnique && allColumnsUnique && allSquaresUnique;
};

// console.log(
//   "is this valid sudoku?",
//   isValidSudoku([
//     ["1", "2", ".", ".", ".", ".", "6", ".", "7"],
//     [".", ".", ".", ".", ".", ".", ".", ".", "5"],
//     [".", ".", "9", ".", "6", ".", "4", ".", "."],
//     [".", "6", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", "4", ".", ".", "7", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", "5", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", ".", "2"],
//     [".", "9", ".", ".", ".", ".", ".", ".", "7"],
//   ]),
// );

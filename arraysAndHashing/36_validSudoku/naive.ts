// https://leetcode.com/problems/valid-sudoku/

// need to check each row - this is easy just check that each row only has numbers 1 - 9. Make sure there are no repeats - that's it
// check each column. We can make all the columns by taking the matching indices from each row. For example make an array of row1[0] and row2[0], etc
// check each box - this one will be toughest and we'll solve it later

const allUnique = (input: string[]): boolean => {
  // convert the array to a set - sets only have 1 of each value
  // if the input array is longer than the set then that means we have a repeat number so it's invalid
  const set = new Set(input);
  return set.size === input.length;
};

// the sudoku rows come with periods "." to represent empty spaces. We need to remove all of these so the set compare will work
const stripOutPlaceholderDots = (input: string[]) =>
  input.filter((sudokuNumber) => sudokuNumber !== ".");

const getColumnsFromRows = (rows: string[][]): string[][] => {
  // we know the size of the sudoku board and the size of the input arrays so we could make 9 colums. This won't scale obviously for bigger sudokus
  // if they exist but it solves this problem
  const column1: string[] = [];
  const column2: string[] = [];
  const column3: string[] = [];
  const column4: string[] = [];
  const column5: string[] = [];
  const column6: string[] = [];
  const column7: string[] = [];
  const column8: string[] = [];
  const column9: string[] = [];

  rows.forEach((row) => {
    column1.push(row[0]);
    column2.push(row[1]);
    column3.push(row[2]);
    column4.push(row[3]);
    column5.push(row[4]);
    column6.push(row[5]);
    column7.push(row[6]);
    column8.push(row[7]);
    column9.push(row[8]);
  });

  return [
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
const getRowOfSquaresFromRows = (rows: string[][]): string[][] => {
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

const checkSquares = (squares: string[][]) =>
  squares.every((square, index) => {
    console.log(`square ${index}: ${square}`);
    const dotsRemoved = stripOutPlaceholderDots(square);
    return allUnique(dotsRemoved);
  });

const isValidSudoku = (board: string[][]): void => {
  const columns = getColumnsFromRows(board);

  console.log("board length is", board.length);

  const allRowsUnique = board.every((row, index) => {
    console.log(`row ${index}: ${row}`);
    const dotsRemoved = stripOutPlaceholderDots(row);
    return allUnique(dotsRemoved);
  });

  console.log("allRowsUnique?", allRowsUnique);

  const allColumnsUnique = columns.every((column, index) => {
    console.log(`column ${index}: ${column}`);
    const dotsRemoved = stripOutPlaceholderDots(column);
    return allUnique(dotsRemoved);
  });

  const [row1, row2, row3, row4, row5, row6, row7, row8, row9] = board;

  const firstThreeSquares = getRowOfSquaresFromRows([row1, row2, row3]);
  const secondThreeSquares = getRowOfSquaresFromRows([row4, row5, row6]);
  const lastThreeSquares = getRowOfSquaresFromRows([row7, row8, row9]);

  const firstThreeSquaresUnique = firstThreeSquares.every((square, index) => {
    console.log(`square ${index}: ${square}`);
    const dotsRemoved = stripOutPlaceholderDots(square);
    return allUnique(dotsRemoved);
  });

  console.log("firstThreeSquaresUnique?", firstThreeSquaresUnique);
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);

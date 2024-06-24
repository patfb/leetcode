/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  /**
   * @param {array} group
   */
  const validateGroup = (group) => {
    const onlyNumbers = group.filter((value) => value !== ".");
    const uniques = new Set(onlyNumbers);
    return uniques.size === onlyNumbers.length;
  };

  /**
   * @param {character[][]} board
   */
  const toPositions = (board) => {
    const mapped = board.reduce((acc, currentRow, rowIndex) => {
      const rowMapped = currentRow.map((value, columnIndex) => ({
        value,
        row: rowIndex,
        column: columnIndex,
      }));
      return [...acc, rowMapped];
    }, []);

    return mapped.flat();
  };

  const positions = toPositions(board);

  const rows = [];
  const columns = [];
  const squares = [];

  for (let position = 0; position < 9; position++) {
    const row = positions.filter((group) => group.row === position);
    const column = positions.filter((group) => group.column === position);
    rows.push(row);
    columns.push(column);
  }

  const validRows = rows.every((row) =>
    validateGroup(row.map(({ value }) => value)),
  );

  const validColumns = columns.every((column) => {
    validateGroup(column.map(({ value }) => value));
  });

  const group1 = new Set([
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ]);
};

export { isValidSudoku };

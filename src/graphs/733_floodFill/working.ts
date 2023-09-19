/* 
https://leetcode.com/problems/flood-fill/description/
Runtime 70ms beats 54.35% of users with TypeScript
Memory 44.61MB beats 77.95% of users with TypeScript
*/

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number,
) => {
  const _inBounds = ({ row, column }: { row: number; column: number }) =>
    row >= 0 && row < image.length && column >= 0 && column < image[0].length;

  const _recursiveFill = ({
    image,
    r,
    c,
    color,
    directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ],
  }: {
    image: number[][];
    r: number;
    c: number;
    color: number;
    directions?: number[][];
  }) => {
    const prevColor = image[r][c];

    if (prevColor === color) return image;

    image[r][c] = color;

    for (let d of directions) {
      const row = r + d[0];
      const col = c + d[1];

      // continue skips this iteration but loop continues
      // break would stop the loop altogether
      if (!_inBounds({ row, column: col })) continue;

      if (image[row][col] === prevColor) {
        // be careful not to return recursive fill otherwise this doesn't work
        _recursiveFill({ image, r: row, c: col, color });
      }
    }
    return image;
  };

  const updatedImage = _recursiveFill({ image, r: sr, c: sc, color });
  return updatedImage;
};

console.log(
  "floodFill",
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);

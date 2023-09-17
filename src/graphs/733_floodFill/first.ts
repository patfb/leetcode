/* 
https://leetcode.com/problems/flood-fill/description/

*/

const recursiveFill = ({
  image,
  r,
  c,
  color,
}: {
  image: number[][];
  r: number;
  c: number;
  color: number;
}) => {
  const prevColor = image[r][c];
  if (prevColor === color) return image;
  image[r][c] = color;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let d of dir) {
    const row = r + d[0];
    const col = c + d[1];
    if (row < 0 || row >= image.length || col < 0 || col >= image[0].length)
      continue;
    if (image[row][col] === prevColor)
      recursiveFill({ image, r: row, c: col, color });
  }
  return image;
};

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number,
) => {
  const updatedImage = recursiveFill({ image, r: sr, c: sc, color });
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

export {};

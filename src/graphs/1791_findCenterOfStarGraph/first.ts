/* 
https://leetcode.com/problems/find-center-of-star-graph/description/ 
Runtime 127ms beats 25.58% of users with TypeScript
Memory 69.78MB beats 27.91%of users with TypeScript
*/

const findCenter = (edges: number[][]): number => {
  const intersection = edges.reduce((accumulator, edge) =>
    accumulator.filter((item) => edge.includes(item)),
  );
  return intersection[0];
};

console.log(
  "findCenter",
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
);

/* 
https://leetcode.com/problems/k-closest-points-to-origin/
Runtime 487ms beats 15.07% of users with TypeScript
Memory 85.59MB beats 6.16% of users with TypeScript
*/

const kClosest = (points: number[][], k: number): number[][] => {
  interface PointDistance {
    point: number[];
    distance: number;
  }

  const sortPointsByDistance = (a: PointDistance, b: PointDistance) => {
    if (a.distance > b.distance) return 1;
    if (a.distance < b.distance) return -1;
    return 0;
  };

  const distanceFromOrigin = (point: number[] = []) => {
    const [x, y] = point;
    const firstTerm = Math.pow(x, 2) + Math.pow(y, 2);
    return Math.sqrt(firstTerm);
  };

  const closeMap = points.map((point) => ({
    point,
    distance: distanceFromOrigin(point),
  }));

  const sorted = closeMap.sort(sortPointsByDistance);
  const firstKElements = sorted.slice(0, k);
  const pointsArray = firstKElements.reduce(
    (accum, item) => [...accum, item.point],
    [],
  );

  return pointsArray;
};

console.log(
  "kClosest",
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1,
  ),
);

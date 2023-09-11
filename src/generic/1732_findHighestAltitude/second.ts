/* 
https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 43ms beats 98.55% of users with TypeScript
Memory 44.06MB beats 22.22% of users with TypeScript
*/

const largestAltitude = (gains: number[]): number =>
  gains.reduce(
    (accum, current) => {
      const runningTotal = accum.runningTotal;
      const max = accum.max;
      const currentHeight = current + runningTotal;
      const newMax = Math.max(max, currentHeight);
      return { runningTotal: currentHeight, max: newMax };
    },
    { runningTotal: 0, max: 0 },
  ).max;

console.log("largestAltitude", largestAltitude([-5, 1, 5, 0, -7]));

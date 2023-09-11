/* 
https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 57ms Beats 51.45%of users with TypeScript
Memory 43.13MB beats 43.48% of users with TypeScript
*/

const largestAltitude = (gains: number[]): number => {
  const altitudes = [0];

  gains.forEach((gain) => {
    const current = altitudes.at(-1) + gain;
    altitudes.push(current);
  });

  return Math.max(...altitudes);
};

console.log("largestAltitude", largestAltitude([-5, 1, 5, 0, -7]));

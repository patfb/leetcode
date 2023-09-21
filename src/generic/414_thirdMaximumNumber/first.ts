/* 
https://leetcode.com/problems/third-maximum-number/
Runtime 71ms beats 21.13% of users with TypeScript
Memory 45.18MB beats 25.35% of users with TypeScript
*/

const thirdMax = (nums: number[]): number => {
  const leastToGreatest = (a: number, b: number) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };

  const distinct = Array.from(new Set(nums));
  const sorted = [...distinct].sort(leastToGreatest);

  if (sorted.length < 3) return sorted[0];
  return sorted[2];
};

console.log("thirdMax", thirdMax([3, 2, 1]));

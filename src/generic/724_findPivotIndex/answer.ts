/* 
https://leetcode.com/problems/find-pivot-index/?envType=study-plan-v2&envId=leetcode-75
Runtime 71ms beats 61.95% of users with TypeScript
Memory 44.49MB beats 95.35% of users with TypeScript
*/

const pivotIndex = (nums: number[]): number => {
  const total = nums.reduce((total, current) => total + current, 0);

  let leftSum = 0;
  const index = nums.findIndex((value) => {
    if (leftSum === total - leftSum - value) return true;
    leftSum = leftSum + value;
  });

  return index;
};

console.log("pivotIndex", pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log("pivotIndex", pivotIndex([2, 1, -1]));
// console.log("pivotIndex", pivotIndex([1, 2, 3]));

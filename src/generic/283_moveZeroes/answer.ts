/**
 * https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75
 * Rule: Do not return anything, modify nums in-place instead.
 * Runtime 77ms beats 79.66% of users with TypeScript
 * Memory 47.19MB beats 67.92% of users with TypeScript
 */
const moveZeroes = (nums: number[]): void => {
  let leftPointer = 0;
  for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
    if (nums[rightPointer] !== 0) {
      const left = nums[leftPointer];
      const right = nums[rightPointer];
      nums[leftPointer] = right;
      nums[rightPointer] = left;
      leftPointer++;
    }
  }
};

// console.log("moveZeroes", moveZeroes([0, 1, 0, 3, 12]));
// console.log("moveZeroes", moveZeroes([0, 1, 0, 3, 12]));

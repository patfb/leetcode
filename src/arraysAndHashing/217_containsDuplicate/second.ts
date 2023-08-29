// https://leetcode.com/problems/contains-duplicate
// Runtime 67ms beats 98.42% of users with TypeScript
// Memory 54.64MB beats 64.35% of users with TypeScript

const containsDuplicate = (nums: number[]): boolean => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Runtime 100ms beats 58.10% of users with TypeScript
// Memory 60.10MB beats 7.94% of users with TypeScript

const findDisappearedNumbers = (nums: number[]): number[] => {
  const missing = [];
  const inputSet = new Set(nums);

  const expected = Array(nums.length)
    .fill(0)
    .map((_item, index) => index + 1);

  expected.forEach((item, _index) => {
    if (!inputSet.has(item)) missing.push(item);
  });

  return missing;
};

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

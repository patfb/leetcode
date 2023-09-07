// https://leetcode.com/problems/majority-element/
// Runtime 65ms beats 56.03% of users with TypeScript
// Memory 45.64MB beats 70.18%of users with TypeScript

const majorityElement = (nums: number[]): number => {
  if (nums.length === 1) return nums[0];

  const frequency = new Map<number, number>();
  const majority = Math.ceil(nums.length / 2);

  const mostFrequentNumber = nums.find((num) => {
    if (frequency.has(num)) {
      const timesSeen = frequency.get(num);
      const updatedTimesSeen = timesSeen + 1;
      frequency.set(num, updatedTimesSeen);
      if (updatedTimesSeen >= majority) return true; // end the find loop
    } else {
      frequency.set(num, 1); // this is the first time we've seen this number
      return false; // continue the find loop
    }
  });

  return mostFrequentNumber;
};

console.log("majorityElement", majorityElement([3, 2, 3]));

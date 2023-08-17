// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 53ms beats 94.93% of users with TypeScript
// 42.99mb beats 96.01% of users with TypeScript

const twoSum = (numbers: number[], target: number): number[] => {
  let leftPointer = 0; // start the left pointers at the beginning
  let rightPointer = numbers.length - 1; // start the right pointer at the end

  while (leftPointer < rightPointer) {
    const sum = numbers[leftPointer] + numbers[rightPointer];
    if (sum > target) {
      // remember that the list is sorted so we can decrease our sum by choosing a smaller number from the right side of the list
      rightPointer--;
    }
    if (sum < target) {
      // remember that the list is sorted so we can increase our sum by choosing a bigger number from the left side of the list
      leftPointer++;
    }
    if (sum === target) return [leftPointer + 1, rightPointer + 1];
  }
};

console.log("twoSum", twoSum([2, 7, 11, 15], 26));

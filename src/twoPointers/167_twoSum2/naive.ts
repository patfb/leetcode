// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime 470ms beats 15.03% of users with TypeScript
// Memory 43.18mb beats 90.37% of users with TypeScript

const twoSum = (numbers: number[], target: number): number[] => {
  let leftPointer = 0;

  while (leftPointer < numbers.length) {
    for (
      let rightPointer = leftPointer + 1;
      rightPointer < numbers.length;
      rightPointer++
    ) {
      console.log(
        `comparing ${numbers[leftPointer]} with ${numbers[rightPointer]}`,
      );

      if (numbers[leftPointer] + numbers[rightPointer] === target) {
        console.log(
          `comparing ${numbers[leftPointer]} + ${numbers[rightPointer]} = ${target}`,
        );
        return [leftPointer + 1, rightPointer + 1];
      }
    }
    leftPointer++;
  }
};

console.log("twoSum", twoSum([2, 7, 11, 15], 26));

/* 
https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
*/

const findMaxAverage = (nums: number[], k: number): number => {
  let maxAverage = null;
  let leftPointer = 0;

  for (let rightPointer = k; rightPointer <= nums.length; rightPointer++) {
    const window = nums.slice(leftPointer, rightPointer);
    const sum = window.reduce(
      (accumulator, current) => accumulator + current,
      0,
    );
    const average = sum / k;

    if (maxAverage === null) {
      maxAverage = average;
    }

    if (maxAverage !== null) {
      maxAverage = Math.max(maxAverage, average);
    }

    leftPointer++;
  }
  return maxAverage;
};

// console.log("findMaxAverage", findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log("findMaxAverage", findMaxAverage([5], 1));
// console.log("findMaxAverage", findMaxAverage([-1], 1));

export {};

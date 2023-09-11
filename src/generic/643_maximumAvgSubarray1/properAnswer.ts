/* 
https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75
Runtime 78ms beats 86.37% of users with TypeScript
Memory 58.70MB beats 17.11% of users with TypeScript
*/

const findMaxAverage = (nums: number[], k: number): number => {
  const calcSum = (array: number[]) =>
    array.reduce((accumulator, current) => accumulator + current, 0);

  const initialWindow = nums.slice(0, k); // slice is exclusive of the end
  let prevSum = calcSum(initialWindow);
  let maxAverage = prevSum / k;
  let leftPointer = 1; // start left point at 1 instead of 0 because we just calculated the first window

  for (let rightPointer = k; rightPointer < nums.length; rightPointer++) {
    const prevLeft = nums[leftPointer - 1];
    const right = nums[rightPointer];
    const sum = prevSum - prevLeft + right; // new sum is our prev sum minus the item we just slid past + the item we just slid into
    prevSum = sum;
    maxAverage = Math.max(maxAverage, sum / k);
    leftPointer++;
  }
  return maxAverage;
};

// console.log("findMaxAverage", findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log("findMaxAverage", findMaxAverage([5], 1));
// console.log("findMaxAverage", findMaxAverage([-1], 1));

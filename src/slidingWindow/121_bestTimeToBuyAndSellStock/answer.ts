// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// Runtime 72ms beats 90.53% of users with TypeScript
// Memory 51.39mb beats 90.29% of users with TypeScript

const maxProfit = (prices: number[]): number => {
  let maxProfit = 0;
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < prices.length) {
    if (prices[leftPointer] < prices[rightPointer]) {
      const profit = prices[rightPointer] - prices[leftPointer];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      leftPointer = rightPointer;
    }
    rightPointer++;
  }

  return maxProfit;
};

// console.log("max profit", maxProfit([7, 1, 5, 3, 6, 4]));

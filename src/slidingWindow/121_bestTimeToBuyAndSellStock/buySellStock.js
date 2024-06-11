// Runtime 70ms Beats 76.49% of users with JavaScript
// Memory 59.02 MB Beats 48.29% of users with JavaScript

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxProfit = 0;
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < prices.length) {
    if (prices[leftPointer] < prices[rightPointer]) {
      const profit = prices[rightPointer] - prices[leftPointer];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      leftPointer = rightPointer;
    }

    rightPointer++;
  }

  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const naiveMaxProfit = (prices) => {
  let maxProfit = 0;

  prices.forEach((price, index, array) => {
    const futureValues = array.slice(index + 1);

    const profit = futureValues.reduce((accumulator, current) => {
      const profit = current - price;
      if (profit > accumulator) return profit;
      return accumulator;
    }, 0);

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  });

  return maxProfit;
};

export { maxProfit, naiveMaxProfit };

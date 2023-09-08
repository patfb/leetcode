// https://leetcode.com/problems/summary-ranges
// Runtime 54ms beats 69.66% of users with TypeScript
// Memory 43.40MB beats 18.73% of users with TypeScript

const summaryRanges = (input: number[]): string[] => {
  if (input.length === 0) return [];
  if (input.length === 1) return [`${input[0]}`];

  const ranges = [];
  const rangeStack = [input[0], input[0]];
  let leftPointer = 0;

  for (let rightPointer = 1; rightPointer <= input.length - 1; rightPointer++) {
    const leftValue = input[leftPointer];
    const rightValue = input[rightPointer];

    const isAdjacent = Math.abs(leftValue - rightValue) === 1;

    if (isAdjacent) {
      rangeStack.pop();
      rangeStack.push(rightValue);
    }

    if (!isAdjacent) {
      const endRange = rangeStack.pop();
      const startRange = rangeStack.pop();

      ranges.push([startRange, endRange]);

      rangeStack.push(rightValue);
      rangeStack.push(rightValue);
    }

    leftPointer++;
  }

  const allRanges = [...ranges, rangeStack];

  const formatted = allRanges.map(([beginning, end]) => {
    if (beginning === end) return `${beginning}`;
    return `${beginning}->${end}`;
  });

  return formatted;
};

// console.log("summaryRanges", summaryRanges([0, 1, 2, 4, 5, 7]));
// console.log("summaryRanges", summaryRanges([]));
// console.log("summaryRanges", summaryRanges([1]));

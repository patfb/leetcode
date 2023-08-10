// https://leetcode.com/problems/longest-consecutive-sequence/description/

// Runtime: 121 ms beats 77.34%of users with TypeScript
// Memory: 61.55mb beats 88.98%of users with TypeScript

const compareInts = (a: number, b: number): number => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const longestConsecutive = (nums: number[]): number => {
  if (!nums.length) return 0;

  const consecutiveMap = new Map<number, number>();

  nums.sort(compareInts);

  nums.forEach((currentNum) => {
    if (!consecutiveMap.has(currentNum)) {
      consecutiveMap.set(currentNum, 1); // init the list length to 1
    }

    if (currentNum < 0) {
      // if the currentNum is negative then the previous sequential number should be currentNum + 1 instead of currentNum - 1
      const prevSequentialNumForNegative = currentNum + 1;
      if (consecutiveMap.has(prevSequentialNumForNegative)) {
        const previousLength = consecutiveMap.get(prevSequentialNumForNegative);
        consecutiveMap.delete(prevSequentialNumForNegative);
        consecutiveMap.set(currentNum, previousLength + 1);
      }
    }

    const prevSequentialNum = currentNum - 1;

    if (consecutiveMap.has(prevSequentialNum)) {
      const previousLength = consecutiveMap.get(prevSequentialNum);
      consecutiveMap.delete(prevSequentialNum);
      consecutiveMap.set(currentNum, previousLength + 1);
    }
  });

  const maxConsecutiveLength = Array.from(consecutiveMap.values())
    .sort(compareInts)
    .at(-1);

  return maxConsecutiveLength;
};

// console.log(
//   "longest consecutive length",
//   longestConsecutive([
//     -6, -6, -5, -4, -3, -2, -2, -1, 0, 0, 0, 1, 2, -6, 2, 3, 4, 4, 5, 7, 8, 9,
//     9, 9,
//   ]),
// );

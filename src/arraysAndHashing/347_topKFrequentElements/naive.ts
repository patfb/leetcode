// https://leetcode.com/problems/top-k-frequent-elements/

// Runtime 74 ms beats 75.62% of users with Typescript
// Memory 45.61 mb beats 71.90% of users with Typescript

interface NumberMap {
  value: number;
  nTimesItAppears: number;
}

const compareNumberMaps = (a: NumberMap, b: NumberMap) => {
  if (a.nTimesItAppears < b.nTimesItAppears) {
    return -1;
  }

  if (a.nTimesItAppears > b.nTimesItAppears) {
    return 1;
  }

  if (a.nTimesItAppears === b.nTimesItAppears) {
    return 0;
  }
};

const topKFrequent = (nums: number[], k: number): number[] => {
  const numberMap = new Map<number, number>(); // key is the number from the list and value is the number of times it appears

  nums.forEach((num) => {
    if (numberMap.has(num)) {
      const timesAppeared = numberMap.get(num);
      numberMap.set(num, timesAppeared + 1);
    } else {
      numberMap.set(num, 1); // this is the first time we've seen the number so initialize it in the map
    }
  });

  const arrayMap = Array.from(numberMap.entries());

  const arrayOfNumberMaps = arrayMap.map(([value, nTimesItAppears]) => ({
    value,
    nTimesItAppears,
  }));

  const sortedMostFrequentToLeast = arrayOfNumberMaps
    .sort(compareNumberMaps)
    .reverse();

  const topKthMostFrequent = sortedMostFrequentToLeast.slice(0, k);

  // just return the values not the amount of times they appeared
  return topKthMostFrequent.map(({ value }) => value);
};

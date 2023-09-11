/* 
https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 63ms beats 34.23% of users with TypeScript
Memory 44.38MB beats 77.46% of users with TypeScript
*/

const uniqueOccurrences = (arr: number[]): boolean => {
  const frequencyMap = new Map<number, number>(); // value, occurrences

  arr.forEach((item) => {
    if (frequencyMap.has(item)) {
      const times = frequencyMap.get(item);
      frequencyMap.set(item, times + 1);
    } else {
      frequencyMap.set(item, 1);
    }
  });

  const mapValues = Array.from(frequencyMap, ([_key, value]) => value);
  const uniqueMapValues = new Set(mapValues);

  return mapValues.length === uniqueMapValues.size;
};

// console.log("uniqueOccurrences", uniqueOccurrences([1, 2, 2, 1, 1, 3]));
// console.log("uniqueOccurrences", uniqueOccurrences([1, 2]));

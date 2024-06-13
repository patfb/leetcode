// Runtime 57 ms Beats 92.79% of users with JavaScript
// 52.44 MB Beats 82.92% of users with JavaScript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const freqMap = new Map();

  nums.forEach((num) => {
    if (freqMap.has(num)) {
      const occurences = freqMap.get(num);
      freqMap.set(num, occurences + 1);
    } else {
      freqMap.set(num, 1);
    }
  });

  const freqArray = Array.from(freqMap, ([value, key]) => ({ key, value }));

  const sorted = freqArray.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });

  const topK = sorted.slice(0, k);

  return topK.map(({ key }) => key);
};

export { topKFrequent };

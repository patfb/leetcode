// Runtime 57 ms Beats 92.79% of users with JavaScript
// 52.44 MB Beats 82.92% of users with JavaScript

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let freqArray = [];
  const freqMap = new Map();

  nums.forEach((num) => {
    if (freqMap.has(num)) {
      const occurences = freqMap.get(num);
      freqMap.set(num, occurences + 1);
    } else {
      freqMap.set(num, 1);
    }
  });

  freqMap.forEach((value, key) => {
    freqArray.push({ key, value });
  });

  const sorted = freqArray.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });

  const topK = sorted.slice(0, k);

  return topK.map(({ key }) => key);
};

export { topKFrequent };

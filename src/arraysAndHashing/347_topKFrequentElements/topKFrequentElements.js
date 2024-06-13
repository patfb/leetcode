// 54 ms Beats 96.29%
// 52.06 MB Beats 88.95%

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

  const freqArray = Array.from(freqMap, ([key, value]) => ({ key, value }));

  const sorted = freqArray.sort((a, b) => {
    if (a.value > b.value) return -1;
    if (a.value < b.value) return 1;
    return 0;
  });

  const topK = sorted.slice(0, k);

  return topK.map(({ key }) => key);
};

export { topKFrequent };

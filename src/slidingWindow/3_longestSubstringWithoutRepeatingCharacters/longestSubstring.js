// 78 ms Beats 78.72% of users with JavaScript
// Memory 53.68 MB Beats 58.68% of users with JavaScript

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const sArray = s.split("");
  const set = new Set();
  let leftPointer = 0;
  let maxLength = 0;

  for (let rightPointer = 0; rightPointer < sArray.length; rightPointer++) {
    while (set.has(sArray[rightPointer])) {
      set.delete(sArray[leftPointer]);
      leftPointer++;
    }

    set.add(sArray[rightPointer]);

    maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
  }
  return maxLength;
};

export { lengthOfLongestSubstring };

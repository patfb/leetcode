// 121 ms Beats 52.87% of users with JavaScript
// 77.73 MB Beats 14.14% of users with JavaScript

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const unique = new Set(sorted);

  let maxLength = 0;
  let sequence = [];

  for (const num of unique) {
    if (!sequence.length) {
      sequence.push(num);
    } else {
      if (num === sequence.at(-1) + 1) {
        sequence.push(num);
      } else {
        maxLength = Math.max(maxLength, sequence.length);
        sequence = [num];
      }
    }
  }

  return Math.max(maxLength, sequence.length);
};

export { longestConsecutive };

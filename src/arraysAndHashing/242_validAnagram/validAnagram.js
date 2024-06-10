// Runtime 75ms Beats 46.00% of users with JavaScript
// Memory 53.23MB Beats 51.68% of users with JavaScript

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");
  return sSorted === tSorted;
};

export { isAnagram };

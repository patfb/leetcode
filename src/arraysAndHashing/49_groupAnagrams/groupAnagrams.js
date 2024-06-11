// Runtime 110ms Beats 72.30% of users with JavaScript
// Memory 62.76MB Beats 55.55% of users with JavaScript

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = new Map();
  const result = [];

  strs.forEach((original) => {
    const ordered = original.split("").sort().join("");

    if (map.has(ordered)) {
      const originals = map.get(ordered);
      map.set(ordered, [...originals, original]);
    } else {
      map.set(ordered, [original]);
    }
  });

  map.forEach((value, _key) => {
    result.push(value);
  });

  return result;
};

export { groupAnagrams };

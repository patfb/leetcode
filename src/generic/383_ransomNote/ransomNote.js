// Runtime 86 ms Beats 17.73%
// 52.83 MB Beats 43.90%

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const ransomArray = ransomNote.split("");
  const magazineArray = magazine.split("");

  /**
   * @param {array} array
   * @param {Map} map
   */
  const toKeyValues = (array) => {
    const map = new Map();

    array.forEach((letter) => {
      if (map.has(letter)) {
        const frequency = map.get(letter);
        map.set(letter, frequency + 1);
      } else {
        map.set(letter, 1);
      }
    });

    return map;
  };

  const ransomLetterCount = Array.from(
    toKeyValues(ransomArray),
    ([key, value]) => ({ key, value }),
  );
  const magazineMap = toKeyValues(magazineArray);

  return ransomLetterCount.every(
    ({ key: ransomChar, value: ransomCharFrequency }) => {
      if (!magazineMap.has(ransomChar)) return false;

      const magazineCharFrequency = magazineMap.get(ransomChar);
      return magazineCharFrequency >= ransomCharFrequency;
    },
  );
};

export { canConstruct };

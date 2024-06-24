// Runtime 56 ms Beats 70.43%
// Memory 54.60 MB Beats 5.49% this is just "bad" because I'm not mutating the inputs

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const letters = s.split("");
  const letterMap = new Map();

  letters.forEach((letter) => {
    if (letterMap.has(letter)) {
      const count = letterMap.get(letter);
      letterMap.set(letter, count + 1);
    } else {
      letterMap.set(letter, 1);
    }
  });

  const mapArray = Array.from(letterMap, ([letter, count]) => ({
    letter,
    count,
  }));

  /**
   * @param {object} params
   * @param {array} params.mapArray
   * @param {number} params.count
   *
   */
  const combine = ({ mapArray = [], count = 0 }) => {
    const eligibleIndex = mapArray.findIndex(({ count }) => count >= 2);

    if (eligibleIndex === -1) return { mapArray, count }; // no eligible letter found

    const eligibleLetter = mapArray.at(eligibleIndex);
    const letterRemoved = mapArray.toSpliced(eligibleIndex, 1);

    const updatedMapArray = [
      ...letterRemoved,
      // 2 letters are consumed and added to the growing palindrome
      { letter: eligibleLetter.letter, count: eligibleLetter.count - 2 },
    ];

    const updatedCount = count + 2; // because we added 2 letters to the palindrome
    return combine({ mapArray: updatedMapArray, count: updatedCount });
  };

  const { mapArray: finalArray, count } = combine({ mapArray, count: 0 });

  const centerLetterIndex = finalArray.findIndex(({ count }) => count === 1);
  const hasCenterLetter = centerLetterIndex > -1;

  return hasCenterLetter ? count + 1 : count;
};

export { longestPalindrome };

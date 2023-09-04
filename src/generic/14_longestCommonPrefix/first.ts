// https://leetcode.com/problems/longest-common-prefix
// Runtime 62ms beats 56.06% of users with TypeScript
// 44.24MB beats 66.15% of users with TypeScript

const longestCommonPrefix = (strs: string[]): string => {
  const list = [...strs];

  const longestWord = list.reduce(
    (accum, currentWord) =>
      currentWord.length > accum.length ? currentWord : accum,
    "",
  );

  let prefix = "";
  const longestWordArray = Array.from(longestWord);

  longestWordArray.find((character, characterIndex) => {
    const allContainPrefix = list.every((word) => {
      return word[characterIndex] === character;
    });

    if (allContainPrefix) {
      prefix += character;
      return false; // return false to continue the find for loop
    } else {
      /* As soon as we hit a prefix character that isn't shared across all words we can
      stop searching for additional prefixes and end the find for loop by returning true */
      return true;
    }
  });

  return prefix;
};

// console.log(
//   "longestCommonPrefix",
//   longestCommonPrefix(["flower", "flow", "flight"]),
// );

// console.log(
//   "longestCommonPrefix",
//   longestCommonPrefix(["dog", "racecar", "car"]),
// );

export {};

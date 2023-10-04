/* 
https://leetcode.com/problems/longest-palindrome/
Runtime 64ms beats 42.21% of users with TypeScript
Memory 44.20MB beats 95.13% of users with TypeScript
*/

const longestPalindrome = (s: string): number => {
  interface MapEntry {
    char: string;
    frequency: number;
  }

  const charMap = new Map<string, number>(); // character, frequency

  s.split("").forEach((character) => {
    if (charMap.has(character)) {
      const frequency = charMap.get(character);
      charMap.set(character, frequency + 1);
    } else {
      charMap.set(character, 1);
    }
  });

  const charMapArray = Array.from(charMap, ([char, frequency]) => ({
    char,
    frequency,
  }));

  // if any of the frequencies in the map are odd that means we'll have at least 1 single item left over that doesn't have a pair.
  // this single item can be the pivot point in our palindrome at the center
  const singleItem = charMapArray.find(({ frequency }) => frequency % 2 !== 0);

  const biggestEvenNumber = charMapArray
    .filter((item: MapEntry) => item.frequency > 1)
    .map((item: MapEntry) => {
      // if frequency is even then return the even number. If frequency is odd then the next biggest even number is the odd number minus 1.
      // this will work because we've already filtered out all items that only appear once
      return item.frequency % 2 === 0
        ? item
        : { ...item, frequency: item.frequency - 1 };
    });

  const palindromeLengthMinusPivot = biggestEvenNumber.reduce(
    (accum, item) => accum + item.frequency,
    0,
  );

  // if a single item exists then we'll put that single item in the center of the palindrome so length will be +1.
  // Otherwise the palindrome is just the sum of all the even frequencies of characters

  return singleItem
    ? palindromeLengthMinusPivot + 1
    : palindromeLengthMinusPivot;
};

// console.log("longestPalindrome", longestPalindrome("abccccdd"));
console.log("longestPalindrome", longestPalindrome("ccc"));

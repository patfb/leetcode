// https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime 289ms beats 17.74% of users with TypeScript
// Memory 50.64mb beats 13.86% of users with TypeScript

const lengthOfLongestSubstring = (s: string): number => {
  const stringArray = Array.from(s);
  if (stringArray.length === 0) return 0;
  if (stringArray.length === 1) return 1;

  let leftPointer = 0;
  let rightPointer = 0;

  let currentSubstring: string[] = [];
  const seenCharacters = new Map<string, number>(); // <character, index>
  const maxSubstringLengths: number[] = [];
  seenCharacters.set(seenCharacters[0], 0);

  while (rightPointer < stringArray.length) {
    console.log(
      `comparing leftIndex ${leftPointer}:${stringArray[leftPointer]} with rightIndex ${rightPointer}:${stringArray[rightPointer]}`,
    );

    // if we haven't seen this letter before in our substring
    if (!seenCharacters.has(stringArray[rightPointer])) {
      // add the character to our list of seen characters
      currentSubstring.push(stringArray[rightPointer]);
      seenCharacters.set(stringArray[rightPointer], rightPointer);
      // move on to the next character
      console.log(
        `   adding ${stringArray[rightPointer]}, max substring is now: ${currentSubstring}`,
      );
      rightPointer++;
    }

    // if we got a duplicate or ran into the end of the list without finding a duplicate
    if (
      seenCharacters.has(stringArray[rightPointer]) ||
      rightPointer === stringArray.length
    ) {
      console.log(`   !!! duplicate character: ${stringArray[rightPointer]}`);
      maxSubstringLengths.push(currentSubstring.length);
      currentSubstring = []; // reset the current substring
      seenCharacters.clear();
      leftPointer++;
      rightPointer = leftPointer;
    }
  }

  console.log("max substrings", maxSubstringLengths);
  return Math.max(...maxSubstringLengths);
};

console.log("longest substring", lengthOfLongestSubstring("dvdf"));

export {};

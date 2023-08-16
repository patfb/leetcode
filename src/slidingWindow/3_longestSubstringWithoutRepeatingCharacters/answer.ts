// https://leetcode.com/problems/longest-substring-without-repeating-characters
// Runtime 73ms beats 88.65% of users with TypeScript
// Memory 48.29mb beats 54.03% of users with TypeScript

// With this solution we're truly just moving the pointers around. We aren't making a stack of the current substrings or anything like that.
// Also learned that you can add elements to a set just like a hashmap - don't always need to start with an array so that's cool

const lengthOfLongestSubstring = (stringArray: string): number => {
  const set = new Set<string>();

  let leftPointer = 0;
  let maxSubstringLength = 0;

  for (
    let rightPointer = 0;
    rightPointer < stringArray.length;
    rightPointer++
  ) {
    console.log(
      `iteration: ${rightPointer}, set: [${Array.from(
        set,
      )}], leftValue ${leftPointer}:${
        stringArray[leftPointer]
      }, rightValue ${rightPointer}:${stringArray[rightPointer]}`,
    );

    while (set.has(stringArray[rightPointer])) {
      console.log(
        `   set already had a '${stringArray[rightPointer]}' at position ${rightPointer}, so deleting '${stringArray[leftPointer]}' from position ${leftPointer}`,
      );
      set.delete(stringArray[leftPointer]);
      leftPointer++;
    }

    set.add(stringArray[rightPointer]);
    console.log(
      `   added ${rightPointer}:${
        stringArray[rightPointer]
      }, set: [${Array.from(set)}]`,
    );
    maxSubstringLength = Math.max(
      maxSubstringLength,
      rightPointer - leftPointer + 1,
    );
  }
  return maxSubstringLength;
};

console.log("longest substring", lengthOfLongestSubstring("dvdf"));

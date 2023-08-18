// https://leetcode.com/problems/permutation-in-string/

const mapLetterCounts = (input: string): Map<string, number> => {
  const map = new Map<string, number>(); // <character, count of character>
  const inputArray = Array.from(input);

  inputArray.forEach((character) => {
    if (map.has(character)) {
      const count = map.get(character);
      map.set(character, count + 1);
    } else {
      map.set(character, 1);
    }
  });

  return map;
};

class ValidMap {
  constructor(charMap: Map<string, number>) {
    this.charMap = new Map(charMap); // make sure we make a copy of the original map so we don't mess with the original
  }

  charMap: Map<string, number>;
  isStillValid = true; // is valid so far
  isComplete = false; // we have all characters that we wanted to find
  lastCheckWasGood = true;

  decrement(char: string) {
    // if this character is available in our map and we haven't used up all instances of it yet
    if (this.charMap.has(char) && this.charMap.get(char) > 0) {
      const currentCount = this.charMap.get(char);
      this.charMap.set(char, currentCount - 1);
    } else {
      this.lastCheckWasGood = false;
    }
  }

  checkIsComplete() {
    this.isComplete = Array.from(this.charMap).every(
      ([_key, value]) => value === 0,
    );
    return this.isComplete;
  }

  checkIsValid() {
    this.isStillValid = Array.from(this.charMap).every(
      ([_key, value]) => value >= 0,
    );
    return this.isStillValid;
  }
}

const checkInclusion = (s1: string, s2: string): boolean => {
  // make s1 into a map of how many times each letter appears. "aab" -> a:2, b:1
  // iterate through s2 with 2 pointers. we need to find all the letters next to each other that appear in s1 but in no particular order
  // while we're iterating through s2 if we're on a letter that doesn't appear in the s1 map then just continue because this won't be a permutation
  // if we find a character in s2 that is in s1 then we need to see if the next character is in s2 as well. If it is then we continue to collect characters
  // until we either collect all of the characters in the s1 map or we find one that doesn't match and then we update the pointer to keep looking.
  // actually I don't think we need 2 pointers for this I think we just need 1 because we're only concerned with characters that are adjacent. let's see.
  // if we get more duplicate letters next to each other than we have allowance for in our s1 map that's also bad and we should move to the next

  const s1Map = mapLetterCounts(s1);
  const searchArray = Array.from(s2);
  let currentValidMap = new ValidMap(s1Map);

  const result = searchArray.find((currentChar) => {
    const isValid =
      currentValidMap.lastCheckWasGood && currentValidMap.checkIsValid();

    // if we're invalid then make a new map
    if (!isValid) {
      console.log("invalid map - reinitializing");
      currentValidMap = new ValidMap(s1Map);
      return false; // keep searching
    }

    // if we're still valid and we're complete then return true because we're done
    if (isValid && currentValidMap.checkIsComplete()) return true; // stop searching

    currentValidMap.decrement(currentChar);
    return false; // return false by default to continue the search
  });

  return result !== undefined;
};

console.log("checkInclusion", checkInclusion("oab", "eidbaooo"));

export {};

// https://leetcode.com/problems/permutation-in-string/
// Runtime 3064ms beats 13.42% of users with TypeScript
// Memory 49.58MB beats 28.43% of users with TypeScript

const mapLetterCounts = (stringArray: string[]): Map<string, number> => {
  const map = new Map<string, number>(); // <character, count of character>

  stringArray.forEach((character) => {
    if (map.has(character)) {
      const count = map.get(character);
      map.set(character, count + 1);
    } else {
      map.set(character, 1);
    }
  });

  return map;
};

const checkInclusion = (s1: string, s2: string): boolean => {
  // trick: we don't need to count recompute each element in the sliding window each time only the new one that we add as we slide the window

  const windowSize = s1.length;
  const s1Map = mapLetterCounts(Array.from(s1));
  const s1String = Array.from(s1Map).sort().toString();

  // console.log("s1Map", s1Map);
  // console.log("s1MapArray", s1String);

  let leftPointer = 0;
  let rightPointer = leftPointer + windowSize;

  // console.log(
  //   `windowSize:${windowSize}, leftPointer:${leftPointer}, rightPointer:${rightPointer}`,
  // );

  let containsString = false;
  // let iterations = 0;

  if (s2.length < s1.length) return false;

  while (rightPointer <= s2.length) {
    // iterations++;
    const windowArray = Array.from(s2.slice(leftPointer, rightPointer));
    const windowMap = mapLetterCounts(windowArray);
    const sortedWindowString = Array.from(windowMap).sort().toString();

    if (sortedWindowString === s1String) {
      containsString = true;
      break;
    }

    leftPointer++;
    rightPointer++;
  }
  // console.log("total iterations", iterations);
  return containsString;
};

// console.log("checkInclusion", checkInclusion("ab", "eidbaooo"));

export {};

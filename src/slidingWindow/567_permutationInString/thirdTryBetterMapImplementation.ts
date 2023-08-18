// https://leetcode.com/problems/permutation-in-string/
// Runtime: 1554ms beats 20.45% of users with TypeScript
// Memory: 50.46MB beats 20.45% of users with TypeScript

const toAlphaMap = (input: string[], alphaMap: Map<string, number>) => {
  const map = new Map(alphaMap);
  input.forEach((character) => {
    const currentCount = map.get(character);
    map.set(character, currentCount + 1);
  });
  return map;
};

const mapsEqual = (a: Map<string, number>, b: Map<string, number>) => {
  const arrayA = Array.from(a.keys());
  return arrayA.every((aKey) => {
    const aValue = a.get(aKey);
    const bValue = b.get(aKey);
    return aValue === bValue;
  });
};

const checkInclusion = (s1: string, s2: string): boolean => {
  const alphaMap = new Map()
    .set("a", 0)
    .set("b", 0)
    .set("c", 0)
    .set("d", 0)
    .set("e", 0)
    .set("f", 0)
    .set("g", 0)
    .set("h", 0)
    .set("i", 0)
    .set("j", 0)
    .set("k", 0)
    .set("l", 0)
    .set("m", 0)
    .set("n", 0)
    .set("o", 0)
    .set("p", 0)
    .set("q", 0)
    .set("r", 0)
    .set("s", 0)
    .set("t", 0)
    .set("u", 0)
    .set("v", 0)
    .set("w", 0)
    .set("x", 0)
    .set("y", 0)
    .set("z", 0);

  const s1Array = Array.from(s1);
  const s2Array = Array.from(s2);

  const s1Map = toAlphaMap(s1Array, alphaMap);

  const windowSize = s1Array.length;
  let leftPointer = 0;
  let rightPointer = leftPointer + windowSize;
  let containsString = false;

  if (s2.length < s1.length) return false;

  while (rightPointer <= s2Array.length) {
    const window = s2Array.slice(leftPointer, rightPointer);
    const windowMap = toAlphaMap(window, alphaMap);

    if (mapsEqual(s1Map, windowMap)) {
      containsString = true;
      break;
    }

    leftPointer++;
    rightPointer++;
  }

  return containsString;
};

export {};

// console.log("checkInclusion", checkInclusion("boa", "eidbaooo"));

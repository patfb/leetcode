// https://leetcode.com/problems/permutation-in-string/
// Runtime: 1554ms beats 20.45% of users with TypeScript
// Memory: 50.46MB beats 20.45% of users with TypeScript

// not quite working. Refer to thirdTry for best most inuitive answer so far

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
  const alphaMap = new Map<string, number>()
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
  let isIncluded = false;

  if (s2.length < s1.length) return false;

  // this has to be outside so it doesn't get reset on each loop iteration
  let windowMap: Map<string, number>;

  for (
    let rightPointer = leftPointer + windowSize;
    rightPointer < s2Array.length;
    rightPointer++
  ) {
    if (leftPointer === 0) {
      // this is the first loop
      const firstWindowArray = s2Array.slice(leftPointer, rightPointer);
      windowMap = toAlphaMap(firstWindowArray, alphaMap);
      if (mapsEqual(s1Map, windowMap)) {
        isIncluded = true;
        break;
      }
    }

    if (leftPointer >= 1) {
      const rightValueCount = windowMap.get(s2Array[rightPointer]);
      const droppedValueCount = windowMap.get(s2Array[leftPointer - 1]); // get the item we just dropped as the window slid past

      console.log(
        `BEFORE iteration ${rightPointer}, rightValue:${
          s2Array[rightPointer]
        }, rightValueCount:${rightValueCount}, droppedValue:${
          s2Array[leftPointer - 1]
        }, droppedValueCount:${droppedValueCount}`,
      );

      windowMap.set(s2Array[rightPointer], rightValueCount + 1);
      windowMap.set(s2Array[leftPointer], droppedValueCount - 1);

      console.log(`${rightPointer} iteration window map after`, windowMap);
      if (mapsEqual(s1Map, windowMap)) {
        isIncluded = true;
        break;
      }

      leftPointer++;
    }
  }

  return isIncluded;
};

console.log("checkInclusion", checkInclusion("boa", "eidbaooo"));

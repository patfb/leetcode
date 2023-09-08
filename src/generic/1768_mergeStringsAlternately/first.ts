// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75
// https://leetcode.com/studyplan/leetcode-75/
// Array / String
// Runtime 63ms beats 33.71% of users with TypeScript
// Memory 44.41MB 52.14% of users with TypeScript

const mergeAlternately = (word1: string, word2: string): string => {
  const array1 = Array.from(word1);
  const array2 = Array.from(word2);

  const mergeEqualSizeArrays = (array1: string[], array2: string[]) => {
    let merged = [];
    for (let index = 0; index < array1.length; index++) {
      merged.push(array1[index]);
      merged.push(array2[index]);
    }
    return merged;
  };

  if (array1.length >= array2.length) {
    const array1Subset = array1.slice(0, array2.length);
    const restOfArray1 = array1.slice(array2.length);
    const equalPartsMerged = mergeEqualSizeArrays(array1Subset, array2);
    return [...equalPartsMerged, ...restOfArray1].join("");
  } else {
    const array2Subset = array2.slice(0, array1.length);
    const restOfArray2 = array2.slice(array1.length);
    const equalPartsMerged = mergeEqualSizeArrays(array1, array2Subset);
    return [...equalPartsMerged, ...restOfArray2].join("");
  }
};

console.log("mergeAlternately", mergeAlternately("pqrs", "ab"));
console.log("mergeAlternately", mergeAlternately("ab", "pqrs"));

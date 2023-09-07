// https://leetcode.com/problems/isomorphic-strings
// Runtime 109ms beats 6.25% of users with TypeScript
// Memory 75.81MB beats 5.45% of users with TypeScript

const isIsomorphic = (first: string, second: string): boolean => {
  interface Entry {
    indices: number[];
    count: number;
  }

  const toIsomorphicMap = (input: string) => {
    const charArray = Array.from(input);
    const isoMap = new Map<string, Entry>(); // character, number of times it appears

    charArray.forEach((character, index) => {
      if (isoMap.has(character)) {
        const entry = isoMap.get(character);
        const count = entry.count + 1;
        const indices = [...entry.indices, index];
        isoMap.set(character, { count, indices });
      } else {
        isoMap.set(character, { count: 1, indices: [index] });
      }
    });

    return isoMap;
  };

  const arraysEqual = (array1: number[], array2: number[]) =>
    array1.every((item, index) => item === array2[index]);

  const firstMapValues = Array.from(toIsomorphicMap(first).values());
  const secondMapValues = Array.from(toIsomorphicMap(second).values());

  return firstMapValues.every((entry: Entry, index) => {
    const first: Entry = entry;
    const second: Entry = secondMapValues[index];
    return (
      first.count === second.count && arraysEqual(first.indices, second.indices)
    );
  });
};

// console.log("isIsomorphic", isIsomorphic("egg", "add"));
// console.log("isIsomorphic", isIsomorphic("bbbaaaba", "aaabbbba"));

export {};

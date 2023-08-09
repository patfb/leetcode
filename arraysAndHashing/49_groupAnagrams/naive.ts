// https://leetcode.com/problems/group-anagrams/

// Runtime: 94 ms - beats 99.30% of users with Typescript!
// Memory: 53.99 mb - beats 64.10% of users with Typescript!

interface Anagram {
  original: string;
  sorted: string;
}

const sortString = (input: string): string =>
  Array.from(input).sort().toString();

const mapToAnagrams = (input: string[]): Anagram[] =>
  input.map((item) => ({
    original: item,
    sorted: sortString(item),
  }));

const groupAnagrams = (strs: string[]): string[][] => {
  const anagramMap = new Map<string, string[]>();

  const anagrams = mapToAnagrams(strs);

  anagrams.forEach((anagram) => {
    const existsInMap = anagramMap.has(anagram.sorted);
    if (existsInMap) {
      const anagramOriginalList = anagramMap.get(anagram.sorted);

      anagramMap.set(anagram.sorted, [
        ...anagramOriginalList,
        anagram.original,
      ]);
    }

    if (!existsInMap) {
      anagramMap.set(anagram.sorted, [anagram.original]);
    }
  });

  return Array.from(anagramMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));

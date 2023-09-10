// https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
// Runtime 87ms beats 36.03% of users with TypeScript
// Memory 56.71MB beats 10.08% of users with TypeScript

const reverseVowels = (s: string): string => {
  const inputStringArray = Array.from(s);
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const vowelMap = new Map<number, string>(); // index where vowel was seen, vowel

  inputStringArray.forEach((letter, index) => {
    if (vowels.has(letter.toLowerCase())) {
      // if this letter is a vowel then set its position in our map
      vowelMap.set(index, letter);
    }
  });

  // get all the vowels in the reverse order that they appeared
  const vowelArray = Array.from(vowelMap, ([index, value]) => ({
    index,
    value,
  }));

  const reverseVowelArray = [...vowelArray].reverse();

  const replacementArray = vowelArray.map(({ index: mapIndex }, index) => ({
    index: mapIndex,
    value: reverseVowelArray[index].value,
  }));

  replacementArray.forEach((replacementMap) => {
    inputStringArray[replacementMap.index] = replacementMap.value;
  });

  return inputStringArray.join("");
};

// console.log("reverseVowels", reverseVowels("applesauce"));
// console.log("reverseVowels", reverseVowels("aA"));

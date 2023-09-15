/* 
https://leetcode.com/problems/ransom-note/
Runtime 85ms beats 44.86% of users with TypeScript
Memory 47.46MB beats 25.67% of users with TypeScript
*/

const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const toMap = (charArray: string[]) => {
    const map = new Map<string, number>(); // character, number of appearances

    charArray.forEach((char) => {
      if (map.has(char)) {
        const frequency = map.get(char);
        map.set(char, frequency + 1);
      } else {
        map.set(char, 1);
      }
    });

    return map;
  };

  const ransomMap = toMap(Array.from(ransomNote));
  const magazineMap = toMap(Array.from(magazine));
  const ransomArray = Array.from(ransomMap);

  return ransomArray.every(([ransomChar, ransomFrequency]) => {
    if (!magazineMap.has(ransomChar)) return false;
    const magazineFrequency = magazineMap.get(ransomChar);
    return ransomFrequency <= magazineFrequency;
  });
};

// console.log("canConstruct", canConstruct("aab", "aab"));

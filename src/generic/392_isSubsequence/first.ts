/* 
https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75
Runtime 55ms beats 72.39% of users with TypeScript
Memory 43.02MB beats 42.15% of users with TypeScript
*/

const isSubsequence = (s: string, t: string): boolean => {
  if (!s.length) return true;
  if (s.length > t.length) return false;

  const searchSpace = t.split("");
  const subsequence = s.split("");

  let pointer = 0;

  const result = searchSpace.find((letter, _index) => {
    if (pointer >= subsequence.length) return true;

    if (letter === subsequence[pointer]) {
      pointer++;

      if (pointer >= subsequence.length) return true;

      return false;
    }
  });

  return result !== undefined;
};

console.log("isSubsequence", isSubsequence("abc", "ahbgdc"));
console.log("isSubsequence", isSubsequence("axc", "ahbgdc"));

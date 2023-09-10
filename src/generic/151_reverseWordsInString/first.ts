// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75
// Runtime 50ms beats 93.97% of users with TypeScript
// Memory 44.08MB beats 92.01% of users with TypeScript

const reverseWords = (s: string): string =>
  s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");

console.log("reverseWords", reverseWords("   a good   example   "));

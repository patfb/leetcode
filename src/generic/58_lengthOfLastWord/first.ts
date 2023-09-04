// https://leetcode.com/problems/length-of-last-word
// Runtime 43ms beats 98.01% of users with TypeScript
// Memory 42.55MB beats 78.95% of users with TypeScript

const lengthOfLastWord = (s: string): number =>
  s
    .split(" ")
    .filter((word) => word !== "")
    .at(-1).length;

// console.log("length", lengthOfLastWord("   fly me   to   the moon  "));

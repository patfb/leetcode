/*
https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
https://leetcode.com/studyplan/leetcode-75/
Array / String
Runtime 61ms beats 53.57%of users with TypeScript
Memory 44.78MB beats 47.66% of users with TypeScript
*/

const gcdOfStrings = (str1: string, str2: string): string => {
  const smaller = str1.length <= str2.length ? str1 : str2; // covers the situation if they're both equal

  const validDivisor = (
    candidate: string,
    string1: string,
    string2: string,
  ) => {
    if (string1.length % candidate.length || string2.length % candidate.length)
      return ""; // short circuit because it doesn't divide evenly

    const string1RepeatTimes = string1.length / candidate.length;
    const string2RepeatTimes = string2.length / candidate.length;

    const possibility1 = candidate.repeat(string1RepeatTimes);
    const possibility2 = candidate.repeat(string2RepeatTimes);

    if (possibility1 === string1 && possibility2 === string2) return candidate;

    return "";
  };

  let rightPointer = smaller.length;

  while (rightPointer > 0) {
    const candidate = smaller.slice(0, rightPointer);
    const gcd = validDivisor(candidate, str1, str2);
    if (gcd !== "") return gcd;
    rightPointer--;
  }

  return "";
};

// console.log("gcdOfStrings", gcdOfStrings("ABABAB", "ABAB"));
// console.log("gcdOfStrings", gcdOfStrings("ABCABC", "ABC"));
// console.log("gcdOfStrings", gcdOfStrings("LEET", "CODE"));

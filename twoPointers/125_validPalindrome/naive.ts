// https://leetcode.com/problems/valid-palindrome/description/

// Runtime 63 ms beats 92.19% of users with TypeScript
// Memory 46.66 mb beats 53.19%of users with TypeScript

const onlyAlphaNumeric = (input: string) => input.replace(/[^0-9a-z]/gi, "");

const isPalindrome = (input: string): boolean => {
  const alphaNumericLower = onlyAlphaNumeric(input).toLowerCase();
  const reversed = Array.from(alphaNumericLower).reverse().join("");

  return alphaNumericLower === reversed;
};

console.log("isPalindrome", isPalindrome("A man, a plan, a canal: Panama"));

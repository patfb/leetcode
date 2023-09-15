/* 
https://leetcode.com/problems/power-of-two/
Runtime 57ms beats 87.78% of users with TypeScript
Memory 44.42MB beats 70.42% of users with TypeScript
*/

const isPowerOfTwo = (n: number): boolean => {
  if (n === 0) return false;
  if (n === 1) return true;

  const recursiveDivide = (input: number) => {
    if (input === 2) return true;
    if (input < 2) return false;
    return recursiveDivide(input / 2);
  };

  return recursiveDivide(n);
};

console.log("isPowerOfTwo", isPowerOfTwo(1));
export {};

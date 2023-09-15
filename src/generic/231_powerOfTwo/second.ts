/* 
https://leetcode.com/problems/power-of-two/
*/

const isPowerOfTwo = (n: number): boolean => Number.isInteger(Math.log2(n));

console.log("isPowerOfTwo", isPowerOfTwo(16));

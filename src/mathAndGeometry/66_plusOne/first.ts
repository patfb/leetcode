// https://leetcode.com/problems/plus-one
// Runtime 60ms beats 45.11% of users with TypeScript
// Memory 43.71MB beats 27.41% of users with TypeScript

const plusOne = (input: number[]): number[] => {
  const digits = [...input];

  // take care of this easy scenario first
  if (digits.at(-1) !== 9) {
    const lastDigit = digits.slice(-1)[0];
    const allButLast = digits.slice(0, -1);
    return [...allButLast, lastDigit + 1];
  }

  // last will always be 0 in this situation because we handled the 9 situation above
  const allButLast = digits.slice(0, -1);

  allButLast.reverse();

  let carry = 1;
  const output = allButLast.map((digit) => {
    const result = digit + carry;
    const tens = Math.floor(result / 10);
    const ones = result % 10;
    carry = tens;
    return ones;
  });

  output.reverse();

  return carry ? [carry, ...output, 0] : [...output, 0];
};

// console.log("plusOne", plusOne([4, 3, 2, 1]));
// console.log("plusOne", plusOne([1, 8, 9, 9]));
// console.log("plusOne", plusOne([9, 9, 9]));

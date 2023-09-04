// https://leetcode.com/problems/integer-to-roman
// 107ms beats 78.73% of users with TypeScript
// Memory 48.96MB beats 55.92% of users with TypeScript

const intToRoman = (num: number): string => {
  const romanMap = new Map();
  // base
  romanMap.set(1, "I");
  romanMap.set(5, "V");
  romanMap.set(10, "X");
  romanMap.set(50, "L");
  romanMap.set(100, "C");
  romanMap.set(500, "D");
  romanMap.set(1000, "M");
  // special
  romanMap.set(4, "IV");
  romanMap.set(9, "IX");
  romanMap.set(40, "XL");
  romanMap.set(90, "XC");
  romanMap.set(400, "CD");
  romanMap.set(900, "CM");

  // divisors are sorted from largest to smallest because this is the order we'll check them in
  const divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = "";
  let remainder = num;

  divisors.forEach((divisor) => {
    /* if we already got down to 2 remainder then there's no need
    to continue checking divisors so we can short circuit */
    if (remainder === 0) return romanNumeral;

    const intQuotient = Math.floor(remainder / divisor);

    if (intQuotient >= 1) {
      const romanChar = romanMap.get(divisor);
      for (let i = 0; i < intQuotient; i++) romanNumeral += romanChar;
      remainder = remainder % divisor;
    }
  });

  return romanNumeral;
};

// console.log("intToRoman", intToRoman(49));

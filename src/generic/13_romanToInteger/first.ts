// https://leetcode.com/problems/roman-to-integer
// Runtime 103ms beats 89.83% of users with TypeScript
// Memory 50.14MB beats 16.41% of users with TypeScript

const romanToInt = (s: string): number => {
  const roman = Array.from(s);

  const romanMap = new Map();
  // base
  romanMap.set("I", 1);
  romanMap.set("V", 5);
  romanMap.set("X", 10);
  romanMap.set("L", 50);
  romanMap.set("C", 100);
  romanMap.set("D", 500);
  romanMap.set("M", 1000);
  // special
  romanMap.set("IV", 4);
  romanMap.set("IX", 9);
  romanMap.set("XL", 40);
  romanMap.set("XC", 90);
  romanMap.set("CD", 400);
  romanMap.set("CM", 900);

  let sum = 0;

  for (let index = 0; index < roman.length; index++) {
    const firstTwo = `${roman[index]}${roman[index + 1]}`;

    if (romanMap.has(firstTwo)) {
      sum += romanMap.get(firstTwo);
      index++; // advance the index an extra step because we just looked ahead 1 place
    } else {
      sum += romanMap.get(roman[index]);
    }
  }

  return sum;
};

// console.log("romanToInt", romanToInt("LVIII"));

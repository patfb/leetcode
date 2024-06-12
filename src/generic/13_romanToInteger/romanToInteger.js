// 138 ms Beats 9.99% of users with JavaScript
// 58.35 MB Beats 6.37% of users with JavaScript

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const roman = new Map();

  // thousands
  roman.set("M", 1_000);
  roman.set("MM", 2_000);
  roman.set("MMM", 3_000);

  // hundreds
  roman.set("C", 100);
  roman.set("CC", 200);
  roman.set("CCC", 300);
  roman.set("CD", 400);
  roman.set("D", 500);
  roman.set("DC", 600);
  roman.set("DCC", 700);
  roman.set("DCCC", 800);
  roman.set("CM", 900);

  // tens
  roman.set("X", 10);
  roman.set("XX", 20);
  roman.set("XXX", 30);
  roman.set("XL", 40);
  roman.set("L", 50);
  roman.set("LX", 60);
  roman.set("LXX", 70);
  roman.set("LXXX", 80);
  roman.set("XC", 90);

  // ones
  roman.set("I", 1);
  roman.set("II", 2);
  roman.set("III", 3);
  roman.set("IV", 4);
  roman.set("V", 5);
  roman.set("VI", 6);
  roman.set("VII", 7);
  roman.set("VIII", 8);
  roman.set("IX", 9);

  const allInts = [];
  let currentInt = null;

  let leftPointer = 0;
  let rightPointer = 1;

  const sArray = s.split("");

  while (leftPointer < sArray.length && rightPointer <= sArray.length + 1) {
    const symbol = sArray.slice(leftPointer, rightPointer).join("");

    if (roman.has(symbol)) {
      const symbolValue = roman.get(symbol);
      // replace the last biggest symbol with this new symbol e.g. II -> III
      currentInt = symbolValue;
    } else {
      allInts.push(currentInt);
      currentInt = null;
      leftPointer = rightPointer - 1;
      rightPointer--;
    }

    rightPointer++;
  }

  const allNumbers = currentInt ? [...allInts, currentInt] : allInts;
  const sum = allNumbers.reduce((accum, current) => accum + current, 0);

  return sum;
};

export { romanToInt };

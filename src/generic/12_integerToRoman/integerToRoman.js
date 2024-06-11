// 148 ms Beats 8.05% of users with JavaScript
// 58.70 MB Beats 7.28% of users with JavaScript

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const thousand = new Map();
  thousand.set(1, "M");
  thousand.set(2, "MM");
  thousand.set(3, "MMM");

  const hundred = new Map();
  hundred.set(1, "C");
  hundred.set(2, "CC");
  hundred.set(3, "CCC");
  hundred.set(4, "CD");
  hundred.set(5, "D");
  hundred.set(6, "DC");
  hundred.set(7, "DCC");
  hundred.set(8, "DCCC");
  hundred.set(9, "CM");

  const ten = new Map();
  ten.set(1, "X");
  ten.set(2, "XX");
  ten.set(3, "XXX");
  ten.set(4, "XL");
  ten.set(5, "L");
  ten.set(6, "LX");
  ten.set(7, "LXX");
  ten.set(8, "LXXX");
  ten.set(9, "XC");

  const one = new Map();
  one.set(1, "I");
  one.set(2, "II");
  one.set(3, "III");
  one.set(4, "IV");
  one.set(5, "V");
  one.set(6, "VI");
  one.set(7, "VII");
  one.set(8, "VIII");
  one.set(9, "IX");

  let remainder = num;
  let roman = [];

  if (remainder >= 1_000) {
    const thousandSpot = Math.floor(remainder / 1_000);
    roman.push(thousand.get(thousandSpot));
    remainder = remainder % 1_000;
  }

  if (remainder >= 100) {
    const hundredSpot = Math.floor(remainder / 100);
    roman.push(hundred.get(hundredSpot));
    remainder = remainder % 100;
  }

  if (remainder >= 10) {
    const tenSpot = Math.floor(remainder / 10);
    roman.push(ten.get(tenSpot));
    remainder = remainder % 10;
  }

  if (remainder) {
    roman.push(one.get(remainder));
  }

  return roman.join("");
};

export { intToRoman };

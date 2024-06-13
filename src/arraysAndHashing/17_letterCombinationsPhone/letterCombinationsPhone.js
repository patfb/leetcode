// 49 ms Beats 70.88% of users with JavaScript
// 48.81 MB Beats 51.21% of users with JavaScript

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  const dArray = digits.split("");
  const combinations = [];

  const phone = new Map();
  phone.set("2", ["a", "b", "c"]);
  phone.set("3", ["d", "e", "f"]);
  phone.set("4", ["g", "h", "i"]);
  phone.set("5", ["j", "k", "l"]);
  phone.set("6", ["m", "n", "o"]);
  phone.set("7", ["p", "q", "r", "s"]);
  phone.set("8", ["t", "u", "v"]);
  phone.set("9", ["w", "x", "y", "z"]);

  const combine = (index, currentString) => {
    // base case
    if (currentString.length === digits.length) {
      combinations.push(currentString);
      return;
    }

    const letters = phone.get(dArray[index]);

    for (const letter of letters) {
      combine(index + 1, currentString + letter);
    }
  };

  if (digits) {
    combine(0, "");
  }

  return combinations;
};

export { letterCombinations };

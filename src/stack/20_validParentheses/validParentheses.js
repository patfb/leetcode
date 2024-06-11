// 55ms Beats 70.57% of users with JavaScript
// 49.36MB Beats 91.35% of users with JavaScript

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const sArray = s.split("");
  const stack = [];
  const symbolPairs = new Map();
  symbolPairs.set(")", "(");
  symbolPairs.set("]", "[");
  symbolPairs.set("}", "{");

  // odd length array can't have matching symbols so short circuit
  if (sArray.length % 2 !== 0) return false;

  // if the first symbol isn't an opening symbol then short circuit
  const first = sArray.at(0);
  if (first === ")" || first === "]" || first === "}") return false;

  const valid = sArray.every((symbol) => {
    if (!symbolPairs.has(symbol)) {
      stack.push(symbol);
      return true;
    }

    if (stack.length && stack.at(-1) === symbolPairs.get(symbol)) {
      stack.pop();
      return true;
    }
  });

  return valid && stack.length === 0;
};

export { isValid };

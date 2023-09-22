const repeatedSubstringPattern = (s: string): boolean => {
  const stringLength = s.length;
  if (stringLength <= 1) return false; // can't take a substring of a 1 letter string

  const stringArray = Array.from(s);

  // biggest substring is going to be half the size of the input because you'll take 2 halves to make a whole
  // so we can start there and then work our way smaller

  console.log("length", stringLength);
  const halfWayIndex = Math.floor(stringArray.length / 2);

  const left = stringArray.slice(0, halfWayIndex);
  const right = stringArray.slice(halfWayIndex);

  console.log("halfWayIndex", halfWayIndex);

  console.log("left", left);
  console.log("right", right);

  if (left === right) return true; // both sides are the same so they can be substrings
};

console.log(
  "repeatedSubstringPattern",
  repeatedSubstringPattern("abcabcabcabc"),
);

// console.log("repeatedSubstringPattern", repeatedSubstringPattern("aba"));

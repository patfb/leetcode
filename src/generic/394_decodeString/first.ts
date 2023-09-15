const decodeString = (s: string): string => {
  const input = Array.from(s);

  const recursiveIngest = (inputChars: string[], output = "") => {
    if (!inputChars.length) return output;

    const first = inputChars.shift(); // [a]2[bc]
    const repetitions = Number.parseInt(first);
    inputChars.shift(); // a]2[bc]

    const closeBracketIndex = inputChars.indexOf("]");
    const charactersToRepeat = inputChars.slice(0, closeBracketIndex); // 'a'
    const decoded = charactersToRepeat.join("").repeat(repetitions);
    const nextStringToProcess = inputChars.slice(closeBracketIndex + 1);
    const updatedOutput = output.concat(decoded);

    return recursiveIngest(nextStringToProcess, updatedOutput);
  };

  return recursiveIngest(input, "");
};

// console.log("decodeString", decodeString("3[a]2[bc]")); // "aaabcbc"
console.log("decodeString", decodeString("3[a]2[bc]")); // "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

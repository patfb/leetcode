/* 
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 81ms beats 85.97%of users with TypeScript
Memory 49.26MB beats 24.24% of users with TypeScript
*/

const maxVowels = (s: string, k: number): number => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const input = Array.from(s);
  const initialWindow = input.slice(0, k);

  const vowelsInArray = (input: string[]) =>
    input.reduce(
      (accum, current) => (vowels.has(current) ? accum + 1 : accum),
      0,
    );

  const initialVowels = vowelsInArray(initialWindow);
  let currentTotal = initialVowels;
  let max = initialVowels;
  let leftPtr = 1;

  // console.log(`initialWindow contains ${max} vowels`, initialWindow);

  for (let rightPtr = k; rightPtr < input.length; rightPtr++) {
    const dropped = input[leftPtr - 1];
    const added = input[rightPtr];

    const droppedCount = vowels.has(dropped) ? -1 : 0;
    const addedCount = vowels.has(added) ? 1 : 0;

    currentTotal = currentTotal + droppedCount + addedCount;

    // console.log(
    //   `current:${JSON.stringify(
    //     current,
    //   )}, dropped:${dropped}, added:${added}, dropCount:${droppedCount}, addedCount:${addedCount}, net:${
    //     droppedCount + addedCount
    //   }, currentTotal:${currentTotal}`,
    // );

    max = Math.max(max, currentTotal);

    leftPtr++;
  }

  return max;
};

// console.log("maxVowels", maxVowels("abciiidef", 3));
// console.log("maxVowels", maxVowels("leetcode", 3));

// runtime 54 ms beats 99.97% of other typescript submissions! memory 59.2 mb only beats 10.67% of other typescript submissions though - but hey I'll trade memory usage for runtime

function containsDuplicate(nums: number[]): boolean {
  // first element is the number and second element is the amount of times it appears
  const numberMap = new Map<number, number>();

  const duplicateNumber = nums.find((num, index) => {
    if (!numberMap.has(num)) {
      numberMap.set(num, 1); // set that this is the first time we've seen this number
      return false; // return false so the find filter keeps running
    }

    // if we've gotten this far then we've found that the number was in the map so this means this is our second time seeing it so we can stop and return true
    console.log(`second instance found of ${num} after ${index} iterations`);
    return true;
  });

  return typeof duplicateNumber === "number"; // duplicateNumber is the first number we've found that has a duplicate. If there isn't a duplicate then it'll be undefined.
}

export {};

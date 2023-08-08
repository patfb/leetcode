// we're looking for a number where our current number plus X equals the target number
// current + x = target
// we can say this another way by saying that the X we're looking for should be the target minus our current number.
// x = target - current
const calcOtherNumberThatAddsUpToTarget = (
  currentNumber: number,
  target: number
) => {
  return target - currentNumber;
};

const check = (nums: number[], target: number): number[] => {
  // first element is the number and the second element is the index that the number was located in
  const otherNumberIndexMap = new Map<number, number>();
  let answer: number[] = [];

  nums.find((currentNumberValue, currentNumberIndex) => {
    const otherNumberToFind = calcOtherNumberThatAddsUpToTarget(
      currentNumberValue,
      target
    );

    console.log(
      `have ${currentNumberValue} at position ${currentNumberIndex}, checking the map to see if we have ${otherNumberToFind} at any other index except our current one`
    );

    if (
      otherNumberIndexMap.has(otherNumberToFind) &&
      otherNumberIndexMap.get(otherNumberToFind) !== currentNumberIndex
    ) {
      console.log(`match found after ${currentNumberIndex} iteration(s)`);

      // push index of the otherNumber and the index of the current number onto our answer variable
      answer.push(
        otherNumberIndexMap.get(otherNumberToFind) as number,
        currentNumberIndex
      );

      // return true to exit the array.find loop
      return true;
    }
    console.log(
      `didn't find a match so we're adding ${currentNumberValue} to the map with index ${currentNumberIndex}`
    );
    otherNumberIndexMap.set(currentNumberValue, currentNumberIndex);

    // return false so that the array.find loop continues to search
    return false;
  });

  return answer;
};

function twoSum(nums: number[], target: number): number[] {
  const answer = check(nums, target);
  console.log("answer is", answer);
  return answer;
}

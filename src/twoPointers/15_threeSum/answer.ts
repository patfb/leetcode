// not quite working yet

const threeSum = (nums: number[]): number[][] => {
  let allAnswers = [];
  nums.sort();

  nums.forEach((number, index) => {
    let leftPointer = index;
    let rightPointer = nums.length - 1;

    // if this number is the same as the previous number then skip
    if (index > 0 && number === nums[index - 1]) return;

    // regular two sums problem here
    while (leftPointer < rightPointer) {
      // console.log("loop");
      const leftValue = nums[leftPointer];
      const rightValue = nums[rightPointer];
      // console.log(
      //   `start left ${leftPointer}:${leftValue}, right ${rightPointer}:${rightValue}`,
      // );

      const sum = number + leftValue + rightValue;

      if (sum > 0) {
        // console.log(`sum ${sum} is too high so decrementing right pointer`);
        rightPointer--;
      } else if (sum < 0) {
        leftPointer++;
      } else {
        allAnswers.push([number, leftValue, rightValue]);
        leftPointer++;
        while (
          nums[leftPointer] === nums[leftPointer - 1] &&
          leftPointer < rightPointer
        ) {
          leftPointer++;
        }
      }
    }
  });

  return allAnswers;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

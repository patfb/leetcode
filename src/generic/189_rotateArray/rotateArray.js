/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  // this function has to modify nums in place in order to be accepted
  // this function took too long to complete but all test cases passed

  const recursiveRotate = (array, rotationsRemaining) => {
    if (rotationsRemaining === 0) return array; // we're done

    const last = array.pop();
    array.unshift(last);

    return recursiveRotate(array, rotationsRemaining - 1);
  };
  const result = recursiveRotate(nums, k);
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateRecursiveApproach = (nums, k) => {
  const numLength = nums.length;

  const numsWithIndex = nums.map((value, index) => ({
    value,
    originalIndex: index,
    indexPlusK: index + k,
  }));

  const cyclicValues = numsWithIndex.filter(
    (num) => num.indexPlusK > numLength - 1,
  );

  console.log("numLength", numLength);
  console.log("numsWithIndex", numsWithIndex);
  console.log("cyclicValues", cyclicValues);
};

export { rotate, rotateRecursiveApproach };

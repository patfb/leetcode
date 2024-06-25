/**
 * this is not working
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const numLength = nums.length;

  const numsWithIndex = nums.map((value, index) => {
    const indexPlusK = index + k;

    return {
      value,
      originalIndex: index,
      indexPlusK,
      modulo: indexPlusK % numLength,
    };
  });

  const cyclicIndex = numsWithIndex.findIndex(
    (num) => num.indexPlusK === numLength,
  );

  const cyclicValues = numsWithIndex.slice(cyclicIndex);
  const restValues = numsWithIndex.slice(0, cyclicIndex);

  const answer = [...cyclicValues, ...restValues].map((num) => num.value);
  return answer;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateRecursiveApproach = (nums, k) => {
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

export { rotate, rotateRecursiveApproach };

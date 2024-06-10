// Runtime: 52ms Beats 90.40% of users with JavaScript
// Memory: 51.34 MB Beats 28.08% of users with JavaScript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();
  let result = null;

  nums.find((currentNum, currentIndex) => {
    const soughtNum = target - currentNum;

    if (map.has(soughtNum)) {
      const soughtIndex = map.get(soughtNum);
      result = [soughtIndex, currentIndex];
      // console.log("map has sought num!", {
      //   currentNum,
      //   currentIndex,
      //   soughtNum,
      //   soughtIndex,
      //   result,
      // });

      return true; // break the loop because we found the answer
    }

    map.set(currentNum, currentIndex);
  });

  return result;
};

export { twoSum };

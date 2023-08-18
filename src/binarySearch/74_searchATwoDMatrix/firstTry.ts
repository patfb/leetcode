// https://leetcode.com/problems/search-a-2d-matrix
// 58ms beats 58.89% of users with TypeScript
// 44.40mb beats 38.12% of users with TypeScript

const binarySearchList = (nums: number[], target: number): boolean => {
  if (nums.length > 1) {
    const middleIndex = Math.floor(nums.length / 2);
    const middleValue = nums[middleIndex];

    if (target < middleValue) {
      const leftSideOfArray = nums.slice(0, middleIndex);
      return binarySearchList(leftSideOfArray, target);
    }

    if (target > middleValue) {
      const rightSideOfArray = nums.slice(middleIndex);
      return binarySearchList(rightSideOfArray, target);
    }

    return target === middleValue;
  }

  if (!nums.length) return false;
  return nums[0] === target;
};

const binarySearchMatrix = (
  matrix: number[][],
  target: number,
): number[] | null => {
  if (matrix.length > 1) {
    const middleArrayIndex = Math.floor(matrix.length / 2);
    const middleArray = matrix[middleArrayIndex];
    const firstValue = middleArray[0];
    const lastValue = middleArray.at(-1);

    if (target < firstValue) {
      const left = matrix.slice(0, middleArrayIndex);
      return binarySearchMatrix(left, target);
    }

    if (target > lastValue) {
      const right = matrix.slice(middleArrayIndex);
      return binarySearchMatrix(right, target);
    }

    if (target >= firstValue && target <= lastValue) return middleArray;
  }

  if (!matrix.length) return null; // can't be in an empty matrix

  return target >= matrix[0][0] && target <= matrix[0].at(-1)
    ? matrix[0]
    : null;
};

const searchMatrix = (matrix: number[][], target: number): boolean => {
  const listToSearch = binarySearchMatrix(matrix, target);
  if (listToSearch === null) return false; // if no list contains the number then short circuit
  return binarySearchList(listToSearch, target);
};

console.log(
  "is number in matrix?",
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    11,
  ),
);

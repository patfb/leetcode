// https://leetcode.com/problems/container-with-most-water/
// Runtime 65ms beats 88.75% of users with TypeScript
// Memory 51.47MB beats 39.49% of users with TypeScript

// start at the edges and move in towards the center
// starting at the edges because a wider container will hold more water

const maxArea = (height: number[]): number => {
  let maxAreaSoFar = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const leftHeight = height[leftPointer];
    const rightHeight = height[rightPointer];

    const distanceBetweenPointers = rightPointer - leftPointer;

    const maxWaterLine = Math.min(leftHeight, rightHeight);
    const area = distanceBetweenPointers * maxWaterLine;
    maxAreaSoFar = Math.max(maxAreaSoFar, area);

    // if leftHeight is less than or equal to rightHeight then move left pointer towards middle
    // in hopes of finding a higher left height
    if (leftHeight <= rightHeight) {
      leftPointer++;
    } else {
      // otherwise, if right height is less than right height then move right pointer towards middle
      // in hopes of finding a higher right height
      rightPointer--;
    }
  }

  return maxAreaSoFar;
};

// console.log("maxArea", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log("maxArea", maxArea([1, 1]));

export {};

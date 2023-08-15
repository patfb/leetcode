// Runtime 57ms beats 86.58% of users with TypeScript
// Memory 50.31mb beats 5.13% of users with TypeScript

interface NumWithIndex {
  value: number;
  index: number;
}

const binarySearch = (numsWithIndexes: NumWithIndex[], target: number) => {
  if (numsWithIndexes.length > 1) {
    const middleIndex = Math.floor(numsWithIndexes.length / 2); // close enough to the middle
    const middleElement = numsWithIndexes[middleIndex];

    if (target < middleElement.value) {
      const leftSide = numsWithIndexes.slice(0, middleIndex);
      return binarySearch(leftSide, target);
    }

    if (target > middleElement.value) {
      const rightSide = numsWithIndexes.slice(
        middleIndex,
        numsWithIndexes.length,
      );
      return binarySearch(rightSide, target);
    }

    if (target === middleElement.value) return middleElement.index;
  }

  const itemInList = numsWithIndexes[0];
  return itemInList.value === target ? itemInList.index : -1;
};

const search = (nums: number[], target: number): number => {
  const numsWithIndexes = nums.map((value, index) => ({ value, index }));
  const index = binarySearch(numsWithIndexes, target);
  return index;
};

// console.log("binary search", search([-1, 0, 3, 5, 9, 12], 2));

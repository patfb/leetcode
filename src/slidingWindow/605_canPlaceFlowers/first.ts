// https://leetcode.com/problems/can-place-flowers/
// Runtime 61ms beats 70.93% of users with TypeScript
// 44.78MB beats 74.57% of users with TypeScript

const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let validSpots = 0;
  const AVAILABLE = 0;
  const placedIndexes = new Set();

  flowerbed.forEach((current, index, originalArray) => {
    const prev = originalArray[index - 1];
    const next = originalArray[index + 1];

    const prevAvailable = prev === AVAILABLE || prev === undefined;
    const nextAvailable = next === AVAILABLE || next === undefined;
    const currentAvailable = current === AVAILABLE;
    const previousJustFilled = placedIndexes.has(index - 1);

    const isAvailable =
      prevAvailable &&
      nextAvailable &&
      currentAvailable &&
      previousJustFilled === false;

    // console.log(
    //   `index:${index}, [${prev}, ${current}, ${next}], available:${isAvailable}, prevAvail:${prevAvailable}, nextAvail:${nextAvailable}`,
    // );

    if (isAvailable) {
      validSpots++;
      // console.log(`placing a flower in index: ${index}`);
      placedIndexes.add(index); // keep track that we just put a flower in the current index
    }
  });

  // console.log("valid spots", validSpots);
  return n <= validSpots;
};

// console.log("canPlaceFlowers", canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
// console.log("canPlaceFlowers", canPlaceFlowers([0, 0, 1, 0, 1], 1));

const doesEatingRateWork = (
  bananaPiles: number[],
  eatPerHour: number,
  hoursAvailable: number,
) => {
  const hoursToEatEachPile = bananaPiles.map((bananasInPile) =>
    Math.ceil(bananasInPile / eatPerHour),
  );

  const totalHours = hoursToEatEachPile.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return totalHours <= hoursAvailable;
};

const minEatingSpeed = (piles: number[], hours: number): number => {
  const maxPile = Math.max(...piles);

  /* We can only eat 1 pile per hour so if we have the same amount of piles as we have hours
  then the max rate of bananas per hour must equal the max amount of bananas in a pile. Otherwise
  we won't be able to finish all the piles. */
  if (hours === piles.length) return maxPile;

  const eatingRateOptions = Array.from(Array(maxPile).keys()).map(
    (item) => item + 1,
  );

  console.log("options", eatingRateOptions);

  let lowestRate = maxPile;
  let leftPointer = 1;
  let rightPointer = eatingRateOptions.length;
  let iteration = 0;

  while (leftPointer < rightPointer) {
    iteration++;

    const middlePointer = Math.floor((leftPointer - 1 + rightPointer) / 2);
    const rateToCheck = eatingRateOptions[middlePointer];
    const listToCheck = eatingRateOptions.slice(leftPointer, rightPointer);

    const eatingRateWorks = doesEatingRateWork(piles, rateToCheck, hours);

    // console.log(
    //   `iteration:${iteration},
    //     rateToCheck:${rateToCheck},
    //     leftPointer:${leftPointer},
    //     middlePointer:${middlePointer},
    //     rightPointer:${rightPointer},
    //     listToCheck:${listToCheck}`,
    // );

    if (eatingRateWorks) {
      // console.log(`   WORKS: ${rateToCheck} per hour -> looking for lower`);
      lowestRate = Math.min(lowestRate, rateToCheck);
      rightPointer = middlePointer - 1;
    } else {
      // console.log(`   DOES NOT WORK -> looking for higher`);
      leftPointer = middlePointer + 1;
    }
  }

  return lowestRate;

  // use every to check if all bananas in array can be eaten
};

// console.log("minEatingSpeed", minEatingSpeed([3, 6, 7, 11], 8));
// console.log("minEatingSpeed", minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log("minEatingSpeed", minEatingSpeed([30, 11, 23, 4, 20], 6));

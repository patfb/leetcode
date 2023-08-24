// https://leetcode.com/problems/koko-eating-bananas
// Runtime 114ms beats 18.00% of users with TypeScript
// Memory 49.88MB beats 5.14% of users with TypeScript

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

  let lowestRate = maxPile;
  let leftValue = 1;
  let rightValue = maxPile;

  while (leftValue <= rightValue) {
    const middleValue = Math.floor((leftValue + rightValue) / 2);
    const eatingRateWorks = doesEatingRateWork(piles, middleValue, hours);

    if (eatingRateWorks) {
      lowestRate = Math.min(lowestRate, middleValue);
      rightValue = middleValue - 1;
    } else {
      leftValue = middleValue + 1;
    }
  }

  return lowestRate;
};

// console.log("minEatingSpeed", minEatingSpeed([3, 6, 7, 11], 8));
// console.log("minEatingSpeed", minEatingSpeed([30, 11, 23, 4, 20], 5));
// console.log("minEatingSpeed", minEatingSpeed([30, 11, 23, 4, 20], 6));
// console.log("minEatingSpeed", minEatingSpeed([312884470], 312884469));
// console.log(
//   "minEatingSpeed",
//   minEatingSpeed(
//     [
//       873375536, 395271806, 617254718, 970525912, 634754347, 824202576,
//       694181619, 20191396, 886462834, 442389139, 572655464, 438946009,
//       791566709, 776244944, 694340852, 419438893, 784015530, 588954527,
//       282060288, 269101141, 499386849, 846936808, 92389214, 385055341, 56742915,
//       803341674, 837907634, 728867715, 20958651, 167651719, 345626668,
//       701905050, 932332403, 572486583, 603363649, 967330688, 484233747,
//       859566856, 446838995, 375409782, 220949961, 72860128, 998899684,
//       615754807, 383344277, 36322529, 154308670, 335291837, 927055440, 28020467,
//       558059248, 999492426, 991026255, 30205761, 884639109, 61689648, 742973721,
//       395173120, 38459914, 705636911, 30019578, 968014413, 126489328, 738983100,
//       793184186, 871576545, 768870427, 955396670, 328003949, 786890382,
//       450361695, 994581348, 158169007, 309034664, 388541713, 142633427,
//       390169457, 161995664, 906356894, 379954831, 448138536,
//     ],
//     943223529,
//   ),
// );

export {};

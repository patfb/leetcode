// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/?envType=study-plan-v2&envId=leetcode-75
// Runtime 49ms beats 95.10% of users with TypeScript
// 45.00MB beats 18.43% of users with TypeScript

const kidsWithCandies = (
  candies: number[],
  extraCandies: number,
): boolean[] => {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};

// console.log("kidsWithCandies", kidsWithCandies([2, 3, 5, 1, 3], 3));
// console.log("kidsWithCandies", kidsWithCandies([4, 2, 1, 1, 2], 1));
// console.log("kidsWithCandies", kidsWithCandies([2, 8, 7], 1));

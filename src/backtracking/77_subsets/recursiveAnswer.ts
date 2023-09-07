// https://leetcode.com/problems/subsets/
// Runtime 61ms beats 61.23% of users with TypeScript
// Memory 45.19MB beats 38.29% of users with TypeScript

// let iteration = 0;
const subsets = (nums: number[]): number[][] => {
  // iteration++;
  // console.log(`recursion: ${iteration}, nums:${JSON.stringify(nums)}`);
  if (!nums.length) {
    // console.log(`   returning empty list`);
    return [[]];
  }

  const [first, ...rest] = nums;

  // console.log(`   first:${first} | rest:${JSON.stringify(rest)}`);

  const combosFirstExcluded = subsets(rest);

  const combosFirstIncluded = combosFirstExcluded.map((combo) => {
    const comboWithFirst = [...combo, first];
    return comboWithFirst;
  });

  // console.log(
  //   `   first:${first} | combosIncluded:${JSON.stringify(
  //     combosFirstIncluded,
  //   )} | combosFirstExcluded:${JSON.stringify(combosFirstExcluded)}`,
  // );

  const combined = [...combosFirstExcluded, ...combosFirstIncluded];
  // console.log(`   combined:${JSON.stringify(combined)}`);
  return combined;
};

// console.log("subsets (combinations)", subsets([1, 2, 3]));

// const combinationSum = (input: number[], target: number): number[][] => {
//   // because all of the inputs are positive and we're only doing sums
//   // we can throw out all values that are greater than the target
//   // this will cut down on the amount of combinations we need to generate

//   const goodInts = (input: number[], target: number) => {
//     const compareInts = (a: number, b: number) => {
//       if (a < b) return -1;
//       if (a > b) return 1;
//       return 0;
//     };
//     const sorted = [...input].sort(compareInts);
//     const firstIndexGreaterThanTarget = sorted.findIndex(
//       (number) => number <= target,
//     );

//     const candidates = sorted.slice(0, firstIndexGreaterThanTarget);
//     return candidates;
//   };

//   console.log("candidates", goodInts(input, target));

//   // const [first, ...rest] = candidates;

//   // return candidates;
// };

// console.log("combinationSum", combinationSum([2, 3, 6, 7], 7));

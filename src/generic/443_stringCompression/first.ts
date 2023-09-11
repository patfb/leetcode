// /*
// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75

// */

// const compress = (chars: string[]): number => {
//   let left = 0;
//   let count = 0;

//   chars.forEach((_char, right, charsArray) => {
//     console.log(`start. left:${left}, right:${right}`);

//     const leftValue = chars[left];
//     const rightValue = chars[right];

//     console.log(
//       `leftValue:${leftValue}, rightValue:${rightValue}, charsArray:${JSON.stringify(
//         charsArray,
//       )}`,
//     );

//     if (leftValue === rightValue) {
//       console.log(`   same value so incrementing count`);
//       count++;
//     }

//     if (leftValue !== rightValue) {
//       console.log(
//         `   not equal. leftValue:${leftValue}, rightValue:${rightValue}`,
//       );
//       charsArray.splice(left, count, `${leftValue}${count}`);
//       console.log("spliced", charsArray);
//       count = 1;
//       left = right;

//       console.log(`   leftPointer:${left}, rightPointer:${right}`);
//     }
//   });

//   console.log("chars", chars);
//   return chars.length;
// };

// console.log("compress", compress(["a", "a", "b", "b", "c", "c", "c"]));

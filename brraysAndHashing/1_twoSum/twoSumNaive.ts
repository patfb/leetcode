const check = (numArray: number[], target: number) => {
  const answers: number[] = [];
  let answered = false;
  const array1 = [...numArray];
  const array2 = [...numArray];

  for (const [firstArrayIndex, firstArrayValue] of array1.entries()) {
    if (answered) break;
    for (const [secondArrayIndex, secondArrayValue] of array2.entries()) {
      if (answered) break;
      const result =
        firstArrayValue + secondArrayValue === target &&
        firstArrayIndex !== secondArrayIndex;

      if (result === true) {
        console.log(
          `matching number: ${firstArrayValue} found at index: ${firstArrayIndex}`
        );
        console.log(
          `matching number: ${secondArrayValue} found at index: ${secondArrayIndex}`
        );
        answers.push(firstArrayIndex, secondArrayIndex);
        answered = true;
        break;
      }
    }
  }

  return answers;
};

function twoSum(nums: number[], target: number): number[] {
  const answers = check(nums, target);
  console.log("answers are", answers);
  return answers;
}

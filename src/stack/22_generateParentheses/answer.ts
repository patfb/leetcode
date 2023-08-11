// there's a typo in this function name
const generateParenthesis = (nPairs: number): string[] => {
  let iterations: number = 0;
  const stack: string[] = [];
  const combinations: string[] = []; // the array we'll keep track of our running list of valid combinations

  // 'open' refers to a '('
  // 'closed' refers to a ')'

  const backtrack = (nOpen: number, nClosed: number) => {
    iterations++;
    // console.log(
    //   `iteration: ${iterations}, nOpen: ${nOpen}, nClosed: ${nClosed}, nPairs: ${nPairs}`,
    // );

    const allEqual = new Set([nOpen, nClosed, nPairs]).size === 1; // check if all of these values are the same value with a set

    if (allEqual) {
      // console.log("   COMBINATION FOUND", stack.join(""));
      combinations.push(stack.join(""));
      return;
    }

    if (nOpen < nPairs) {
      stack.push("(");
      // console.log(`   pushed OPEN stack is ${stack.join("")}`);
      backtrack(nOpen + 1, nClosed);
      stack.pop();
    }

    if (nClosed < nOpen) {
      stack.push(")");
      // console.log(`   pushed CLOSED stack is ${stack.join("")}`);
      backtrack(nOpen, nClosed + 1);
      stack.pop();
    }
  };

  backtrack(0, 0); // start the recursion

  console.log(
    `total iterations: ${iterations}, valid combinations generated: ${combinations.length}`,
  );

  return combinations;
};

console.log("generate parens", generateParenthesis(3));

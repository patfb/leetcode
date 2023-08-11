// https://leetcode.com/problems/evaluate-reverse-polish-notation

// Runtime 63ms beats 85.39% of users with TypeScript
// Memory 49.54mb beats 20.53% of users with TypeScript

/* In reverse Polish notation, the operators follow their operands. For example, to add 3 and 4 together, the expression is 3 4 + rather than 3 + 4. 
The expression 3 − 4 + 5 in conventional notation is 3 4 − 5 + in reverse Polish notation: 4 is first subtracted from 3, then 5 is added to it.

The concept of a stack, a last-in/first-out construct, is integral to the left-to-right evaluation of RPN.
In the example 3 4 -, first the 3 is put onto the stack, then the 4; the 4 is now on top and the 3 below it.
The subtraction operator removes the top two items from the stack, performs 3 - 4, and puts the result of -1 onto the stack. */

const evalRPN = (tokens: string[]): number => {
  const operators = new Set<string>(["+", "-", "*", "/"]);
  const stack: string[] = [];

  tokens.forEach((token) => {
    if (!operators.has(token)) {
      // if the token is not one of the math operators then push the number token onto the stack
      stack.push(token);
    } else {
      // otherwise the token is a number so we need to pop the last 2 items on the stack which will be numbers (based on the constraints
      // of the problem) and then apply the given math operator to the 2 numbers we popped off
      const topNumber = stack.pop();
      const secondFromTopNumber = stack.pop();

      // based on the rules of the problem if we're dividing we have to always round down to 0 so we need to handle that special
      if (token === "/") {
        const divisionResult = eval(`${secondFromTopNumber} / ${topNumber}`);
        const truncated = Math.trunc(divisionResult);
        stack.push(truncated.toString()); // make sure it goes back on the stack as a string
      } else {
        const result = eval(
          `${secondFromTopNumber} ${token} ${topNumber}`,
        ) as number; // the 'eval' function lets us evaluate strings as math. make sure to include spaces between operator and numbers to avoid compile error
        stack.push(result.toString());
      }
    }
  });

  return parseInt(stack[0]);
};

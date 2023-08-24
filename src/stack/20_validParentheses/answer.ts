// https://leetcode.com/problems/valid-parentheses/

// Runtime: 55 ms beats 92.24% of users with TypeScript
// Memory: 44.32mb beats 65.97% of users with TypeScript

const startingSymbolIsInvalid = (firstSymbol: string) =>
  firstSymbol === ")" || firstSymbol === "}" || firstSymbol === "]";

// if the length of the list is odd then that's an immediate fail because it means a bracket is missing its partner
const isOdd = (length: number) => length % 2 !== 0;

const isValid = (symbols: string): boolean => {
  const symbolArray = Array.from(symbols);

  const closingSymbolMap = new Map<string, string>();
  closingSymbolMap.set(")", "(");
  closingSymbolMap.set("]", "[");
  closingSymbolMap.set("}", "{");

  if (!symbolArray.length || isOdd(symbolArray.length)) {
    // console.log(`array length is: ${symbolArray.length} so this is invalid`);
    return false; // if the list of all symbols isn't even then we're missing a pair somewhere so short circuit and return false
  }

  if (startingSymbolIsInvalid(symbolArray.at(0))) {
    // console.log("first symbol is invalid so short circuiting");
    return false;
  }

  const stack: string[] = []; // we'll use an array as our stack because it does all the same things a stack does

  const allGood = symbolArray.every((symbol) => {
    if (closingSymbolMap.has(symbol)) {
      if (stack.length && stack.at(-1) === closingSymbolMap.get(symbol)) {
        // the last value in the stack is the matching opening symbol to our closing symbol so we can delete both items
        // we 'delete' both items by popping the opening symbol from the stack and just not adding the new closing symbol to the stack
        stack.pop();
        return true; // return true for symbolArray.every
      } else {
        return false; // return false for symbolArray.every. this short circuits the rest of the loop
      }
    } else {
      // if the symbol is an opening symbol like '(', '[', or '{' then put that item on the stack
      stack.push(symbol);

      return true; // return true for symbolArray.every so we can continue with the loop
    }
  });

  return allGood && stack.length === 0;
};

export {};

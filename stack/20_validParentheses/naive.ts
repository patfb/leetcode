// https://leetcode.com/problems/valid-parentheses/

interface StackInterface<T> {
  push(item: T): void;
  pop(): T;
  peek(): T;
  size(): number;
}

class Stack<T> implements StackInterface<T> {
  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data.at(-1);
  }

  size(): number {
    return this.data.length;
  }
}

const parenthesesSymbols = ["(", ")"];
const bracketSymbols = ["[", "]"];
const braceSymbol = ["{", "}"];

// could make a map of all symbols and their pairs

const isValid = (symbols: string): boolean => {
  const symbolArray = Array.from(symbols);

  const parenthesesStack = new Stack<string>();
  const bracketStack = new Stack<string>();
  const braceStack = new Stack<string>();

  // "every" will fail faster than just using forEach
  return symbolArray.every((symbol) => {
    if (parenthesesSymbols.includes(symbol)) {
      const lastValue = parenthesesStack.peek();
      // if the first item that we get is a ")" then that's automatically invalid
    }
  });
};

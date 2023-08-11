// https://leetcode.com/problems/min-stack

// Runtime 105 ms beats 70.51% of users with TypeScript
// Memory 51.26mb beats 76.58% of users with TypeScript

class MinStack {
  constructor() {}

  // the # symbol makes the item a private class member
  #minimums: number[] = [];
  #data: number[] = [];

  #setMin = (input: number): void => {
    // if we don't already have a minimum then whatever the input is becomes the new min
    if (!this.#minimums.length) {
      this.#minimums.push(input);
    } else {
      // otherwise check what our current minimum is
      const currentMin = this.#minimums.at(-1);

      if (input <= currentMin) {
        // if the new input is less than or equal to our current minimum then push the new input to the minimums list
        this.#minimums.push(input);
      } else {
        // otherwise the current input is larger than our previous minimums so the new minimum to add is still the current minimum
        this.#minimums.push(currentMin);
      }
    }
  };

  push(val: number): void {
    this.#data.push(val);
    this.#setMin(val);
  }

  pop(): void {
    this.#data.pop();
    this.#minimums.pop();
  }

  top(): number {
    const currentTop = this.#data.at(-1);
    return currentTop;
  }

  getMin(): number {
    const currentMin = this.#minimums.at(-1);
    return currentMin;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

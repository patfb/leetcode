// https://leetcode.com/problems/min-stack/

// Runtime: 1061 ms beats 5.11% of users with Typescript
// Memory: 60.14 mb beats 5.11% of users with Typescript

// not very good

class MinStack {
  // the # symbol makes the item a private class member

  #data: number[] = [];
  #arraySortCompareFn = (a: number, b: number): number => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  constructor() {}

  push(val: number): void {
    this.#data.push(val);
  }

  pop(): void {
    this.#data.pop();
  }

  top(): number {
    return this.#data.at(-1);
  }

  getMin(): number {
    const tmpData = [...this.#data];
    return tmpData.sort(this.#arraySortCompareFn).at(0);
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

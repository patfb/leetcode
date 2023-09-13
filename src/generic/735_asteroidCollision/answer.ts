/* 
https://leetcode.com/problems/asteroid-collision/description/?envType=study-plan-v2&envId=leetcode-75
Runtime 71ms beats 66.08% of users with TypeScript
Memory 45.77MB beats 19.30% of users with TypeScript
*/

const asteroidCollision = (asteroids: number[]): number[] => {
  const stack = [];

  const willCollide = (left: number, right: number) => {
    if (left < 0 && right > 0) return true;
    return false;
  };

  const smash = (left: number, right: number): number[] => {
    const absLeft = Math.abs(left);
    const absRight = Math.abs(right);
    if (absLeft === absRight) return [];
    return absLeft > absRight ? [left] : [right];
  };

  asteroids.forEach((asteroid) => {
    console.log(`asteroid:${asteroid}, stack:${JSON.stringify(stack)}`);
    while (stack.length && willCollide(asteroid, stack.at(-1))) {
      console.log(` inside while`);
      const difference = asteroid + stack.at(-1);

      if (difference < 0) {
        stack.pop();
      } else {
        if (difference > 0) {
          asteroid = 0;
        } else {
          asteroid = 0;
          stack.pop();
        }
      }
    }

    if (asteroid) stack.push(asteroid);
  });

  return stack;
};

console.log("asteroidCollision", asteroidCollision([5, 10, -5]));
// console.log("asteroidCollision", asteroidCollision([-2, -1, 1, 2]));

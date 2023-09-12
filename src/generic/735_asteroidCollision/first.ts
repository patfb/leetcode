const _willCollide = (asteroids: number[]) => {
  if (asteroids.every((asteroid) => asteroid > 0)) return false;
  if (asteroids.every((asteroid) => asteroid < 0)) return false;
  return true;
};

const _smash = (last: number, secondLast: number) => {
  // console.log(`   smash last:${last}, secondLast:${secondLast}`);
  // if they won't collide then return both
  if (!_willCollide([last, secondLast])) return [secondLast, last]; // they won't collid so return both

  // otherwise they will collide so one will be destroyed
  if (Math.abs(last) > Math.abs(secondLast)) return [last];
  if (Math.abs(secondLast) > Math.abs(last)) return [secondLast];

  // otherwise they are equal so they both destroy each other
  return [];
};

const asteroidCollision = (asteroids: number[]): number[] => {
  const _recursiveDestroy = (asteroids: number[]) => {
    // console.log("asteroids", asteroids);

    // base case: no asteroids left
    if (!asteroids.length) return [];
    // base case: only 1 asteroid left
    if (asteroids.length === 1) return asteroids;
    // base case: asteroids are all moving in the same direction and will never collide
    if (!_willCollide(asteroids)) return asteroids;

    const last = asteroids.pop();
    const secondLast = asteroids.pop();

    // if they won't collide then take the last and put it at the front
    // take the second last and make it the new last
    // this ensures that all asteroids have a chance to smash together
    if (!_willCollide([last, secondLast])) {
      asteroids.unshift(last);
      asteroids.push(secondLast);
      return _recursiveDestroy(asteroids);
    }

    const smashResult = _smash(last, secondLast);

    return _recursiveDestroy([...asteroids, ...smashResult]); // continue smashing asteroids down until we reach a base case
  };

  return _recursiveDestroy(asteroids);
};
// console.log("asteroidCollision", asteroidCollision([5, 10, -5]));
console.log("asteroidCollision", asteroidCollision([-2, -1, 1, 2]));

// getting tripped up on this one: [-2,-1,1,2] because they aren't all going in the same direction but they'll never hit each other

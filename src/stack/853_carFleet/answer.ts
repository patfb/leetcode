// https://leetcode.com/problems/car-fleet
// Runtime 231ms beats 73.04% of users with TypeScript
// Memory 78.94mb beats 34.78% of users with TypeScript

interface Car {
  position: number;
  speed: number;
  finishTime: number;
}

const sortCarByPositionDescending = (a: Car, b: Car) => {
  if (a.position < b.position) return 1;
  if (a.position > b.position) return -1;
  return 0;
};

const carFleet = (
  target: number,
  positionArray: number[],
  speedArray: number[],
): number => {
  const cars = positionArray.map((position, index) => {
    const speed = speedArray[index];
    const car = {
      position,
      speed,
      finishTime: (target - position) / speed,
    };
    return car;
  });

  const carsInOrder = cars.sort(sortCarByPositionDescending);

  const stack: Car[] = [];

  carsInOrder.forEach((car) => {
    stack.push(car);
    if (
      stack.length >= 2 &&
      stack.at(-1).finishTime <= stack.at(-2).finishTime
    ) {
      // we're comparing the cars going down the road from first to last
      // the top of the stack is always the furthest back on the road that we've seen so far
      // if the top of the stack (the rearmost car) would overtake the car in front of it because it's going faster (lower finish time)
      // then we can pop the top of the stack because as soon as it catches up with the car in front it just joins the care fleet in front
      // of it so we don't have to keep track of it anymore

      stack.pop();
    }
  });

  return stack.length;
};

// console.log("carFleet", carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// console.log("carFleet", carFleet(10, [3], [3]));
// console.log("carFleet", carFleet(100, [0, 2, 4], [4, 2, 1]));

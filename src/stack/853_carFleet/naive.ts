interface Car {
  startingPosition: number;
  speed: number;
  position: number;
}

// a fleet of 1 car is still a fleet
class Fleet {
  constructor(car: Car, targetDestination: number) {
    this.targetDestination = targetDestination;
    this.id = car.startingPosition; // the id of the fleet is the original position of the car in front of the fleet
    this.cars = [car];
    this.maxSpeed = car.speed;
    this.position = car.position;
    // we actually don't have to keep track of the length of the cars because they are assumed
    // to have the same position as soon as they become a fleet according to the problem
  }

  id: number;
  cars: Car[] = [];
  maxSpeed: number;
  position: number;
  arrived: boolean = false;
  targetDestination: number;

  // in our stack the bottom of the stack is the first car in the fleet
  // and the top of the stack is the last car in the fleet

  advance() {
    const newPosition = this.position + this.maxSpeed;
    if (newPosition >= this.targetDestination) {
      this.arrived = true;
    }
    this.position = newPosition;
  }

  absorb(caughtUpFleet: Fleet) {
    // if two fleets run into each other then the fleet behind gets absorbed by the
    // fleet in front. we no longer have to keep remembering the fleet behind
    this.cars.push(...caughtUpFleet.cars);
  }
}

const carFleet = (
  target: number,
  position: number[],
  speed: number[],
): void => {
  const fleets = position.map((startingPosition, index) => {
    const car = {
      startingPosition,
      speed: speed[index],
      position: startingPosition,
    };
    const fleet = new Fleet(car, target);
    return fleet;
  });

  console.log("fleets on road", fleets);

  // while there are still traveleing fleets we should continue
  let iterations = 0;
  while (!fleets.every((fleet) => fleet.arrived === true)) {
    iterations++;
    fleets.forEach((fleet) => {
      fleet.advance();
    });
  }

  console.log("iterations", iterations);

  // const filledRoad = position.map()

  // console.log("road", road);
  // console.log("filled road", filledRoad);
};

// carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);

export {};

// https://leetcode.com/problems/daily-temperatures
// Runtime 273ms beats 72.59% of users with TypeScript
// Memory 74.73mb beats 31.38% of users with TypeScript

interface Temp {
  temp: number;
  index: number;
}

const dailyTemperatures = (temps: number[]): number[] => {
  const previouslySeen: Temp[] = [];
  const output: number[] = Array(temps.length).fill(0);

  temps.forEach((todayTemp, todayIndex) => {
    while (previouslySeen.length && todayTemp > previouslySeen.at(-1).temp) {
      const previousTemp = previouslySeen.pop();
      output[previousTemp.index] = todayIndex - previousTemp.index;
    }
    previouslySeen.push({ temp: todayTemp, index: todayIndex });
  });

  return output;
};

// console.log("result:", dailyTemperatures([30, 40, 50, 60]));
